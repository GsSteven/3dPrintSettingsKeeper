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

router.put('', (req, res) => {
    const id = req.body.id;
    const newSettings = req.body.settings;
    Print.findById(id)
        .then(print => {
            const currentSettings = print.printSettings;
            for (const setting in newSettings) {
                currentSettings[setting] = newSettings[setting];
            }
            print.markModified('printSettings');
            print.save();
            res.status(200).send('design updated');
        })
        .catch(e => {
            res.status(400).send('file failed to update');
        });
});

router.delete('', (req, res) => {

});


module.exports = router;