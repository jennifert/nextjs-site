import { LinkChecker } from 'linkinator'
import chalk from 'chalk'
import { existsSync } from 'node:fs'

const checker = new LinkChecker()
const CHECK_PORT = 8765

// Check that the static build exists.
if (!existsSync('out/index.html')) {
    console.error(
        chalk.red('Static build not found. Run npm run build first.')
    )
    process.exit(1)
}

const internalBrokenLinks = []
const externalBrokenLinks = []
const manualReviewLinks = []
const skippedLinks = []

let passedCount = 0

const manualReviewStatuses = [
    401, // Unauthorized
    403, // Forbidden
    405, // Method not allowed
    429, // Too many requests
    500, // Internal server error
    502, // Bad gateway
    503, // Service unavailable
    504  // Gateway timeout
]

function isLoopbackUrl(url) {
    return [
        'localhost',
        '127.0.0.1',
        '[::1]'
    ].includes(url.hostname)
}

function isInternalLink(value) {
    const normalized = value.replaceAll('\\', '/')

    if (normalized.startsWith('out/')) {
        return true
    }

    try {
        const url = new URL(value)

        return isLoopbackUrl(url) &&
            url.port === String(CHECK_PORT)
    } catch {
        return false
    }
}

async function shouldSkipLink(value) {
    try {
        const url = new URL(value)

        // Skip local development URLs found in tutorials,
        // but preserve the link checker's own local server.
        return isLoopbackUrl(url) &&
            url.port !== String(CHECK_PORT)
    } catch {
        return false
    }
}

function printLinkReport(title, links, color) {
    console.log('')

    if (links.length === 0) {
        console.log(chalk.green(`${title}: 0`))
        return
    }

    console.log(color(`${title}: ${links.length}`))

    for (const link of links) {
        console.log('')
        console.log(color(link.url))
        console.log(`  Status: ${link.status ?? 'Unknown'}`)
        console.log(`  Found on: ${link.parent ?? 'Unknown'}`)
    }
}

checker.on('link', (link) => {
    if (link.state === 'OK') {
        passedCount++
        process.stdout.write(chalk.green('.'))
        return
    }

    if (link.state === 'SKIPPED') {
        skippedLinks.push(link)
        process.stdout.write(chalk.gray('-'))
        return
    }

    if (link.state !== 'BROKEN') {
        process.stdout.write('?')
        return
    }

    // Internal failures always take priority.
    if (isInternalLink(link.url)) {
        internalBrokenLinks.push(link)
        process.stdout.write(chalk.red('!'))
        return
    }

    // External restrictions and temporary server errors
    // require manual verification.
    if (manualReviewStatuses.includes(Number(link.status))) {
        manualReviewLinks.push(link)
        process.stdout.write(chalk.yellow('?'))
        return
    }

    // Other external failures may indicate broken links.
    externalBrokenLinks.push(link)
    process.stdout.write(chalk.red('x'))
})

console.log('Checking links in local build...\n')

console.log(chalk.green('.') + ' Passed')
console.log(chalk.red('!') + ' Broken internal link')
console.log(chalk.red('x') + ' Potentially broken external link')
console.log(chalk.yellow('?') + ' Manual verification required')
console.log(chalk.gray('-') + ' Skipped')
console.log('')

try {
    await checker.check({
        path: 'out',
        recurse: true,
        port: CHECK_PORT,
        concurrency: 10,
        timeout: 15000,
        linksToSkip: shouldSkipLink
    })
} catch (error) {
    console.error(
        chalk.red(`\nLink checking failed: ${error.message}`)
    )
    process.exitCode = 1
    throw error
}

console.log('\n')

// Detailed reports
printLinkReport(
    'Broken internal links',
    internalBrokenLinks,
    chalk.red
)

printLinkReport(
    'Potentially broken external links',
    externalBrokenLinks,
    chalk.red
)

printLinkReport(
    'External links requiring manual verification',
    manualReviewLinks,
    chalk.yellow
)

printLinkReport(
    'Skipped links',
    skippedLinks,
    chalk.gray
)

// Final summary
console.log('\n----------------------------------------')
console.log('Link Check Summary')
console.log('----------------------------------------')

console.log(chalk.green(`Passed: ${passedCount}`))
console.log(chalk.red(`Broken internal: ${internalBrokenLinks.length}`))
console.log(chalk.red(`Potentially broken external: ${externalBrokenLinks.length}`))
console.log(chalk.yellow(`Manual verification: ${manualReviewLinks.length}`))
console.log(chalk.gray(`Skipped: ${skippedLinks.length}`))

console.log('----------------------------------------\n')

// Only fail for broken internal links.
if (internalBrokenLinks.length > 0) {
    console.log(chalk.red('Internal link check failed.'))
    process.exitCode = 1
} else {
    console.log(chalk.green('Internal link check passed.'))
    process.exitCode = 0
}