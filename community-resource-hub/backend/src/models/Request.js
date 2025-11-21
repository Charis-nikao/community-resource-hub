const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ['food','medical','clothes','education','other'], default: 'other' },
  urgency: { type: String, enum: ['low','medium','high'], default: 'medium' },
  images: [{ type: String }],
  location: { type: String },
  status: { type: String, enum: ['pending','matched','fulfilled'], default: 'pending' },
  matchedWith: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Request', RequestSchema);
