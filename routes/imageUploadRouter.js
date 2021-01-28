const express = require('express');
const router = express.Router();
const uploadTool = require('./imageUploader');
const singleUpload = uploadTool.upload.single('image');

router.post('', (req, res) => {
    try {
        singleUpload(req, res, (err) => {
            res.json({ 'imageUrl': req.file.location });
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

router.delete('', (req, res) => {
    try {
        const fileName = req.query.fileName;
        const params = {
            Bucket: 'printsettings',
            Key: fileName
        };
        uploadTool.deletePic(params);
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;