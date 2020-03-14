
import { processBody } from './'
import { readFileSync } from 'fs'

test('Summary of the world', async () => {
  const exampleBody = readFileSync('./data/response.data', 'utf8')

  const expectedResult = [
    "=====================================",
    "Coronavirus Cases | 145,870         |",
    "=====================================",
    "Total outcomes    | 77,989 (53.46%) |",
    "Recovered         | 72,551 (93.03%) |",
    "Deaths            | 5,438 (6.97%)   |",
    "=====================================",
  ]
  expect(await processBody(exampleBody)).toEqual(expectedResult)
})
