const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3 = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

exports.getPresignedUrl = async (req, res) => {
  try {
    const { filename, contentType } = req.query;
    const key = `uploads/${Date.now()}_${filename}`;
    const cmd = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
      ContentType: contentType
    });
    const url = await getSignedUrl(s3, cmd, { expiresIn: 60 });
    res.json({ url, key });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Could not create presigned url' });
  }
};
