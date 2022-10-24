const KINESIS_STREAM_NAME = process.env.KINESIS_STREAM_NAME ?? 'test-stream-dev'
const AWS_REGION = process.env.AWS_REGION ?? 'ap-northeast-2'

export { KINESIS_STREAM_NAME, AWS_REGION }
