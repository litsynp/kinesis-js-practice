import { publishEvent } from '../kinesis.js'
import { KINESIS_STREAM_NAME } from '../config.js'

async function execute() {
  const [, , dataParam, iterationParam] = process.argv
  const data = dataParam ?? 'Hello World!'
  const iteration = parseInt(iterationParam ?? 1, 10)
  console.log(iteration)
  let published = 0

  for (let i = 1; i <= iteration; i++) {
    publishEvent(data)
    console.log(`[Iteration ${i}] data: ${data} has been published to the stream: ${KINESIS_STREAM_NAME}.`)
    published += 1
  }

  console.log(`Published total of ${published} records.`)
}

execute()
