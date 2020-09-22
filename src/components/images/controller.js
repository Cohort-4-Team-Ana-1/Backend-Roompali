const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const { config } = require('../../config')
const path = require('path');

const s3 = new aws.S3()

aws.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: 'us-west-1'
})




const uploadImage = multer({
    storage: multerS3({
        s3,
        ContentType: "mimetype",
        bucket: 'roompali-bucket-s3',
        acl: 'public-read',
        metadata(req, file, cb) {
            cb(null, { fieldName: 'TESTING_METADATA' });
        },
        key(req, file, cb) {
            cb(null, `${path.basename(file.originalname, path.extname(file.originalname))}-${Date.now()}${path.extname(file.originalname)}`);
        }
    })
})

module.exports = { uploadImage }