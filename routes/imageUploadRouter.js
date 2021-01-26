const express = require('express');
const router = express.Router();
const uploadTool = require('./imageUploader');
const singleUpload = uploadTool.upload.single('image');

router.post('', (req, res) => {
    try {
        singleUpload(req, res, (err) => {
            console.log(req.file);
            res.json({ 'imageUrl': req.file.location });
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

router.delete('', (req, res) => {
    try {
        const imageName = req.query.img;
        const params = {
            Bucket: 'printsettings',
            Key: imageName
        };
        uploadTool.deletePic(params);
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;