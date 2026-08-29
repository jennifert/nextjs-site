import { LinkChecker } from 'linkinator'
import chalk from 'chalk'

const BASE_URL = 'https://jenntesolin.com'

const checker = new LinkChecker()
const brokenLinks = []

const loggerMap = {
  OK: chalk.green('.'),
  BROKEN: chalk.red('!'),
  SKIPPED: chalk.yellow('?')
}

checker.on('link', (link) => {
  process.stdout.write(loggerMap[link.state] || '?')

  if (link.state === 'BROKEN') {
    brokenLinks.push(link)
  }
})

console.log(`Checking links on ${BASE_URL}...\n`)

await checker.check({
  path: BASE_URL,
  recurse: true
})

console.log('\n')

if (brokenLinks.length === 0) {
  console.log(chalk.green('No broken links found.'))
  process.exit(0)
}

console.log(
  chalk.red(
    `Found ${brokenLinks.length} broken link${
      brokenLinks.length === 1 ? '' : 's'
    }:`
  )
)

for (const link of brokenLinks) {
  console.log('')
  console.log(link.url)
  console.log(`  Status: ${link.status}`)
  console.log(`  Found on: ${link.parent}`)
}

process.exit(1)