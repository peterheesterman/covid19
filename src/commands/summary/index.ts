import { parse } from 'node-html-parser'

import { get, networkErrorMessage } from '../get'

const ruler = `=====================================`

const statsList = [
  'Coronavirus Cases',
  'Recovered',
  'Deaths'
]

function getSpanData (input: string): string {
  const line = input.substr(input.indexOf('<spa'))
  return line.substring(0, line.length)
}

function makeRegex (statName: string): RegExp {
  return new RegExp(`${statName}:<\/h1>.*?<\/span>`, 'ig')
}

function numberCommas(input) {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface Stat {
  name: string
  value: string
  value_number: number
}

function percentage(input: number): string {
  return (input * 100).toFixed(2) + "%"
}

function padName(name: string): string {
  return name.padEnd(18, " ") + "| "
}

function padValue(name: string): string {
  return name.padEnd(16, " ") + "|"
}

function processBody (body) {
  let result = []

  result.push(ruler)

  const stats: Array<Stat> = []
  statsList.forEach(name => {
    const res = body.match(makeRegex(name))
    const data = getSpanData(res[0])
    const root = parse(data)

    const value = root
      .childNodes
      .filter(x => x.nodeType == 1) // HtmlNode
      .map(x => x.childNodes[0].rawText.trim().padStart(8, ' '))[0]

    stats.push({ name, value: value.trim(), value_number: Number(value.replace(",","")) })
  })

  const totalOutcomes = stats[1].value_number + stats[2].value_number
  stats.forEach(({ name, value, value_number }) => {
    if (name != statsList[0]) {
      result.push(`${padName(name)}${padValue(`${value} (${percentage(value_number / totalOutcomes)})`)}`)
    } else {
      result.push(`${padName(name)}${padValue(value)}`)
      result.push(ruler)
      result.push(padName("Total outcomes") + padValue(numberCommas(totalOutcomes) + ` (${percentage(totalOutcomes/stats[0].value_number)})`))
    }
  })

  result.push(ruler)

  return result
}

async function summary(): Promise<Array<string>> {
  const body = await get()
  if (!body) return [networkErrorMessage]

  return processBody(body)
}

export { summary, processBody }
