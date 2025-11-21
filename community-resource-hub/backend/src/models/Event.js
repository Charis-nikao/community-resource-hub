const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date },
  location: { type: String },
  category: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
