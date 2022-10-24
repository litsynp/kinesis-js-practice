import { getShardIterator, getRecords } from '../kinesis.js'

async function execute() {
  const [, , shardIdParam] = process.argv
  const shardId = shardIdParam ?? '0'

  const shardIteratorResult = await getShardIterator({ shardId })
  let shardIterator = shardIteratorResult.ShardIterator

  while (true) {
    console.log(`ShardIterator: ${shardIterator}`)
    const getRecordsResult = await getRecords({
      shardIterator: shardIterator,
      limit: 10,
    })
    shardIterator = getRecordsResult.NextShardIterator

    const textDecoder = new TextDecoder()
    for (const record of getRecordsResult.Records) {
      const dataStr = textDecoder.decode(record.Data)
      console.log(dataStr)
    }
  }
}

execute()
