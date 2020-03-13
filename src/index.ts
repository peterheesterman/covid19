import yargs from 'yargs'

import { check } from './commands/check'

yargs
	.command('check', 'Check the state of the worlds infection', (yargs) => { }, async (argv) => {
      await check()
	})
	.argv
 

