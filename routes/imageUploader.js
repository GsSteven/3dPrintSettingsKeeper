require('dotenv').config();
const aws = require('aws-sdk');
const userKey = process.env.USER_KEY;
const userSecret = process.env.SECRET_KEY;
const multer = require('multer');
const multerS3 = require('multer-s3');


aws.config.update({
    secretAccessKey: userSecret,
    accessKeyId: userKey,
    region: 'us-east-2'
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'printsettings',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: 'testing' });
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString());
        }
    })
});

const deletePic = params => {
    s3.deleteObject(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log('image removed from s3');
        }
    });
}

module.exports = { upload, deletePic };