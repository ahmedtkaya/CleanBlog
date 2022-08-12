const Content = require('../models/Content.js');

exports.getAboutPage = (req, res) => {
  res.render('about');
};
exports.getAddPage = (req, res) => {
  res.render('add');
};
exports.getEditPage = async (req, res) => {
  //edite gider
  const content = await Content.findOne({ _id: req.params.id });
  res.render('edit', { content });
};
