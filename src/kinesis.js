import { v4 as uuid } from 'uuid'
import {
  KinesisClient,
  PutRecordCommand,
  GetRecordsCommand,
  GetShardIteratorCommand,
  ShardIteratorType,
} from '@aws-sdk/client-kinesis'

import { AWS_REGION, KINESIS_STREAM_NAME } from './config.js'

export async function publishEvent({ data }) {
  const id = uuid()

  const client = new KinesisClient({
    region: AWS_REGION,
  })
  const command = new PutRecordCommand({
    Data: new TextEncoder().encode(
      JSON.stringify({
        data,
      }),
    ),
    PartitionKey: id,
    StreamName: KINESIS_STREAM_NAME,
  })
  console.log(command)
  const result = await client.send(command)
  console.log(result)
  return result
}

export async function getShardIterator({ shardId: ShardId }) {
  const client = new KinesisClient({
    region: AWS_REGION,
  })
  const command = new GetShardIteratorCommand({
    ShardId,
    StreamName: KINESIS_STREAM_NAME,
    ShardIteratorType: ShardIteratorType.TRIM_HORIZON,
  })
  console.log(command)
  const result = await client.send(command)
  console.log(result)
  return result
}

export async function getRecords({
  shardIterator: ShardIterator,
  limit: Limit,
}) {
  const client = new KinesisClient({
    region: AWS_REGION,
  })
  const command = new GetRecordsCommand({ ShardIterator, Limit })
  console.log(command)
  const result = await client.send(command)
  console.log(result)
  return result
}
