require('dotenv').config();
const aws = require('aws-sdk');
const userKey = process.env.USER_KEY;
const userSecret = process.env.SECRET_KEY;
const multer = require('multer');
const multerS3 = require('multer-s3-v2');


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
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: (req, file, cb) => {
            cb(null, {

            });
        },
        key: (req, file, cb) => {
            if (file.mimetype === 'application/zip') {
                cb(null, req.query[0] + Date.now().toString() + '.zip');
            } else {
                cb(null, req.query[0] + Date.now().toString());
            }
        }
    })
});

const deletePic = params => {
    s3.deleteObject(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log('file removed from host');
        }
    });
}

module.exports = { upload, deletePic };