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


module.exports = router;