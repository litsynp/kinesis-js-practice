import { getRecords, getShardIterator, publishEvent } from './kinesis.js'

async function main() {
  const publishEventResult = await publishEvent({ data: 'hi' })
  const shardId = publishEventResult.ShardId

  const shardIteratorResult = await getShardIterator({ shardId })
  const shardIterator = shardIteratorResult.ShardIterator

  const getRecordsResult = await getRecords({
    shardIterator: shardIterator,
    limit: 10,
  })

  const textDecoder = new TextDecoder()
  for (const record of getRecordsResult.Records) {
    const uint8array = record.Data
    const str = textDecoder.decode(uint8array)
    console.log(str)
  }
}

main()
