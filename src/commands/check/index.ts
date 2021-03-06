import { parse } from 'node-html-parser'

import { get, networkErrorMessage } from '../get'

function getTableData (input: string): string {
  const line = input.substr(input.indexOf('<td'))
  return line.substring(0, line.length -6)
}

const ruler = `==============================================================`
const titles = 
`Country    | Total   | New     | Total   | Deaths  | Active  |
           | Cases   | Cases   | Deaths  | Today   | Cases   |`

const countriesList = [
  'China',
  'Italy',
  'Iran',
  'S. Korea',
  'Spain',
  'France',
  'Germany',
  'USA',
  'Switzerland',
  'Norway',
  // 'Japan',
  'Sweden',
  'Denmark',
  'Netherlands',
  'UK',
  'Belgium',
  'Austria',
  'Qatar',
  'Bahrain',
  'Singapore',
  'Australia',
  'Canada',
  'Malaysia',
  'Greece',
  'Finland',
  'Israel',
  'Czechia',
  'Hong Kong',
  // 'Iceland',
  'Ireland',
  'New Zealand'
]

function makeLinkRegex (countryName: string): RegExp {
  return new RegExp(`${countryName}<\/a>.*?<\/tr>`, 'ig')
}

function makeRegex (countryName: string): RegExp {
  return new RegExp(`${countryName}.*?<\/tr>`, 'ig')
}

interface Row { name: string, row: Array<string>}

function totalCases (a: Row,b: Row) {
  return Number(b.row[0].replace(",", "")) - Number(a.row[0].replace(",",""))
}

function processBody(body: string) {
  let result = []

  result.push(`${ruler}\n${titles}\n${ruler}`)

  const rows: Array<Row> = []

  countriesList.forEach(name => {
    let res = body.match(makeRegex(name))
    if (res.length !== 1) {
      res = body.match(makeLinkRegex(name))
    }

    const data = getTableData(res[0])
    const root = parse(data, { comment: false })

    const row = root
      .childNodes
      .filter(x => x.nodeType == 1) // HtmlNode
      .map(x => x.childNodes[0].rawText.trim().padStart(8, ' '))

    row.splice(4, 1)
    row.splice(5, 2)

    rows.push({ name, row })
  })

  rows.sort(totalCases)
  rows.forEach(({ name, row }) => {
    result.push(`${name.padEnd(11, ' ')}|${row.join(' |')} |`)
  })

  result.push(ruler)

  return result
}

async function check (): Promise<Array<string>> {
  const body = await get()
  if (!body) return [networkErrorMessage]

  return processBody(body)
}


export { check, processBody }
