require('dotenv').config();
const express = require('express');
const router = express.Router();

const Print = require('../models/Prints');


router.get('', (req, res) => {
    Print.find({})
        .then(response => {
            res.status(200).send(response);
        })
        .catch(e => {
            res.status(400).send('error');
        })
});

router.post('', (req, res) => {

    const newPrint = new Print({
        printSettings: req.body
    });
    newPrint.save()
        .then(() => {
            res.status(200).send();
        })
        .catch(e => {
            console.log(e);
            res.status(400).send('error');
        });
});


module.exports = router;