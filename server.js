require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

//imported routes
const prints = require('./routes/prints');
const imageUploader = require('./routes/imageUploadRouter');

//mongoDB connect
mongoose.connect(MONGO_URI || 'mongodb://localhost/prints', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .catch(err => {
        console.log(err);
    });

mongoose.connection.on('connected', () => {
    console.log('connected to DB');
});

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use('/api/prints', prints);
app.use('/api/upload', imageUploader);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});