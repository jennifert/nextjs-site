import { LinkChecker } from 'linkinator'
import chalk from 'chalk'

const checker = new LinkChecker()

const internalBrokenLinks = []
const externalBrokenLinks = []

const loggerMap = {
  OK: chalk.green('.'),
  BROKEN: chalk.red('!'),
  SKIPPED: chalk.yellow('?')
}

checker.on('link', (link) => {
  process.stdout.write(loggerMap[link.state] || '?')

  if (link.state !== 'BROKEN') {
    return
  }

  // Links beginning with "out/" are links to pages in
  // the locally generated static site.
  if (link.url.startsWith('out/')) {
    internalBrokenLinks.push(link)
  } else {
    externalBrokenLinks.push(link)
  }
})

console.log('Checking links in local build...\n')

await checker.check({
  path: 'out',
  recurse: true
})

console.log('\n')

// Internal links
if (internalBrokenLinks.length === 0) {
  console.log(chalk.green('No broken internal links found.'))
} else {
  console.log(
    chalk.red(
      `Found ${internalBrokenLinks.length} broken internal link${
        internalBrokenLinks.length === 1 ? '' : 's'
      }:`
    )
  )

  for (const link of internalBrokenLinks) {
    console.log('')
    console.log(chalk.red(link.url))
    console.log(`  Status: ${link.status}`)
    console.log(`  Found on: ${link.parent}`)
  }
}

// External links
console.log('')

if (externalBrokenLinks.length === 0) {
  console.log(chalk.green('No problematic external links found.'))
} else {
  console.log(
    chalk.yellow(
      `Found ${externalBrokenLinks.length} external link${
        externalBrokenLinks.length === 1 ? '' : 's'
      } that could not be verified:`
    )
  )

  for (const link of externalBrokenLinks) {
    console.log('')
    console.log(chalk.yellow(link.url))
    console.log(`  Status: ${link.status}`)
    console.log(`  Found on: ${link.parent}`)
  }

  console.log('')
  console.log(
    chalk.yellow(
      'Note: External links may be valid even when they return 403, 404, 410, or other errors to an automated checker.'
    )
  )
}

// Only fail the command for broken links within our own site.
if (internalBrokenLinks.length > 0) {
  process.exit(1)
}

process.exit(0)