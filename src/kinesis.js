import { v4 as uuid } from 'uuid'
import {
  KinesisClient,
  PutRecordCommand,
  GetRecordsCommand,
  GetShardIteratorCommand,
  ShardIteratorType,
} from '@aws-sdk/client-kinesis'

import { AWS_REGION, KINESIS_STREAM_NAME } from './config.js'

export async function publishEvent({ id = uuid(), data }) {
  const client = new KinesisClient({
    region: AWS_REGION,
  })
  return client.send(
    new PutRecordCommand({
      Data: new TextEncoder().encode(
        JSON.stringify({
          data,
        })
      ),
      PartitionKey: id,
      StreamName: KINESIS_STREAM_NAME,
    })
  )
}

export async function getShardIterator({ shardId: ShardId }) {
  const client = new KinesisClient({
    region: AWS_REGION,
  })
  return client.send(
    new GetShardIteratorCommand({
      ShardId,
      StreamName: KINESIS_STREAM_NAME,
      ShardIteratorType: ShardIteratorType.TRIM_HORIZON,
    })
  )
}

export async function getRecords({ shardIterator: ShardIterator, limit: Limit = 10 }) {
  const client = new KinesisClient({
    region: AWS_REGION,
  })
  return client.send(new GetRecordsCommand({ ShardIterator, Limit }))
}
