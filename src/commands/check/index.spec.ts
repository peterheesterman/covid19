
import { processBody } from './'
import { readFileSync } from 'fs'

test('Check countries process body should produce a string list', async () => {
  const exampleBody = readFileSync('./data/response.html', 'utf8')

  const expectedResult = [
`==============================================================
Country    | Total   | New     | Total   | Deaths  | Active  |
           | Cases   | Cases   | Deaths  | Today   | Cases   |
==============================================================`,
"China      |  80,824 |     +11 |   3,189 |     +13 |  12,071 |",
"Italy      |  17,660 |         |   1,266 |         |  14,955 |",
"Iran       |  11,364 |         |     514 |         |   7,321 |",
"S. Korea   |   8,086 |    +107 |      72 |      +5 |   7,300 |",
"Spain      |   5,232 |         |     133 |         |   4,906 |",
"Germany    |   3,675 |         |       8 |         |   3,621 |",
"France     |   3,661 |         |      79 |         |   3,570 |",
"USA        |   2,329 |     +82 |      50 |      +1 |   2,238 |",
"Switzerland|   1,139 |         |      11 |         |   1,124 |",
"Norway     |     996 |         |       1 |         |     994 |",
"Sweden     |     821 |      +7 |       1 |         |     819 |",
"Denmark    |     804 |         |         |         |     803 |",
"Netherlands|     804 |         |      10 |         |     792 |",
"UK         |     798 |         |      11 |         |     769 |",
"Austria    |     602 |     +98 |       1 |         |     595 |",
"Belgium    |     559 |         |       3 |         |     555 |",
"Qatar      |     320 |         |         |         |     320 |",
"Bahrain    |     210 |         |         |         |     166 |",
"Singapore  |     200 |         |         |         |     103 |",
"Canada     |     200 |      +2 |       1 |         |     188 |",
"Australia  |     199 |         |       3 |         |     170 |",
"Malaysia   |     197 |         |         |         |     165 |",
"Greece     |     190 |         |       1 |         |     187 |",
"Finland    |     156 |      +1 |         |         |     155 |",
"Czechia    |     150 |      +9 |         |         |     150 |",
"Israel     |     143 |         |         |         |     139 |",
"Hong Kong  |     138 |      +6 |       4 |         |      56 |",
"New Zealand|       6 |         |         |         |       6 |",
"=============================================================="
]
  expect(await processBody(exampleBody)).toEqual(expectedResult)
})
