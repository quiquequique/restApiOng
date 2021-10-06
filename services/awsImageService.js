const AWS = require("aws-sdk");

const ID = process.env.AWS_ID;
const SECRET = process.env.AWS_SECRET;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

// upload image to s3
async function uploadImage(imageName, buffer) {
  const params = {
    Bucket: BUCKET_NAME,
    Key: imageName,
    Body: buffer
  };

  try {
    const response = await s3.upload(params).promise();
    return response;
  } catch (e) {
    console.error(e);
    throw new Error();
  }
}

module.exports = { uploadImage };
