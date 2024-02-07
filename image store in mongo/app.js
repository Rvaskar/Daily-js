const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const imgSchema = require('./model.js');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

const app = express();

app.set("view engine", "ejs");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully Connected to  MongoDB"))
  .catch(err => console.error("Error connecting to DB:", err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

app.get('/', async (req, res) => {
  try {
    const data = await imgSchema.find({});
    res.render('imagepage', { items: data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/', upload.single('image'), async (req, res) => {
  try {
    const obj = {
      name: req.body.name,
      desc: req.body.desc,
      img: {
        data: fs.readFileSync(path.join(__dirname, '/uploads/' + req.file.filename)),
        contentType: 'image/png'
      }
    };
    await imgSchema.create(obj);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server listening on port', `http://localhost:${port}/`);
});
