# Kinesis JS Practice

Play with your AWS Kinesis stream with JavaScript.

## Requirements

- AWS CLI installed and your credentials set up properly.
- node

## How to use

### Set Up

Make sure you have correct AWS profile activated.

```bash
$ export AWS_PROFILE=default
```

When running the below scripts, you can inject _environment variables_ like this.

```bash
$ KINESIS_STREAM=litsynp-test-stream-dev AWS_REGION=ap-northeast-1 npm run publish-events hello 1
```

### Publish to Stream (PutRecord)

Push test data to stream with `publish-events`.

```bash
$ npm run publish-events [data] [iteration]
```

- `data` - string data to put as record (default: `Hello World!`)
- `iteration` - the number of times you want to send the data (default: `1`)

### Get Records

Retrieve the data you sent to the Kinesis stream.

```bash
$ npm run get-records [shard-id]
```

- `shard-id` - The [ShardID](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_Shard.html). (default: `0`)

## References

For more information about AWS CLI and injecting environment variables, refer to these links:

- https://docs.litsynp.com/archives/aws/aws-cli
- https://docs.litsynp.com/archives/js-ts/misc/environment-variables
