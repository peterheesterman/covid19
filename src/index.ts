import yargs from 'yargs'

import { check } from './commands/check'
import { summary } from './commands/summary'

yargs
  .command('check', 'Depreciated: use countries command instead', (yargs) => { }, async (argv) => {
    // TODO (peter): remove after 5 versions (current version is v0.0.4)
    console.log('check is depreciated, please use "covid countries" from now on.')
    const lines = await check()
    console.log(lines.join('\n'))
  })
  .command('countries', 'Check the state of infection in the worst hit countries', (yargs) => { }, async (argv) => {
    const lines = await check()
    console.log(lines.join('\n'))
  })
  .command('summary', 'Check the state of the worlds infection', (yargs) => { }, async (argv) => {
    const lines = await summary()
    console.log(lines.join('\n'))
  })
  .argv


