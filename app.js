const express = require('express');
const mongoose = require('mongoose');
const Content = require('./models/Content.js');
const contentController = require('./controllers/contentControllers');
const pageController = require('./controllers/pageControllers');
const methodOverride = require('method-override');
const path = require('path');
const ejs = require('ejs');

const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//template engine

app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })), app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.get('/', contentController.getAllContent);
app.get('/contents/:id', contentController.getContent);
app.post('/contents', contentController.createContent);
app.put('/contents/:id', contentController.updateContent);
app.delete('/contents/:id', contentController.deleteContent);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/contents/edit/:id', pageController.getEditPage);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} port'un da başlatıldı`);
});
