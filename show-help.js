let chalk = require('chalk')

let y = chalk.yellow
let b = chalk.bold

module.exports = function showHelp (print) {
  print(
    b('Usage: ') + 'npx check-dts',
    'Check `.d.ts` files in open source library according to types tests',
    '',
    b('Arguments:'),
    '  ' + y('--version') + '   Show version',
    '  ' + y('--help') + '   Show this message'
  )
}
