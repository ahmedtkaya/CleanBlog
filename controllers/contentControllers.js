const Content = require('../models/Content.js');

exports.getAllContent = async (req, res) => {
  const content = await Content.find({});
  res.render('index', { content });
  //deneme
};
exports.getContent = async (req, res) => {
  //console.log(req.params.id);
  //res.render('post');
  const content = await Content.findById(req.params.id);
  res.render('post', { content });
};
exports.createContent = async (req, res) => {
  await Content.create(req.body);
  res.redirect('/');
};
exports.updateContent = async (req, res) => {
  const content = await Content.findOne({ _id: req.params.id });
  content.title = req.body.title;
  content.description = req.body.description;
  content.save();
  res.redirect(`/contents/${req.params.id}`);
};
exports.deleteContent = async (req, res) => {
  await Content.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
