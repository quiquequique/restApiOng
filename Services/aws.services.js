const AWS = require('aws-sdk');

// .env
const ID = process.env.AWS_ID;
const SECRET = process.env.AWS_SECRET;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

// create S3 service object
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

// upload image to s3 bucket
async function uploadImageService(imageKey, buffer) {
  const params = {
    Bucket: BUCKET_NAME,
    Key: imageKey,
    Body: buffer
  };

  try {
    const response = await s3.upload(params).promise();
    return response;
  } catch (err) {
    console.error(err);
    throw new Error();
  }
}

module.exports = { uploadImageService };
