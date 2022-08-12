const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  title: String,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
