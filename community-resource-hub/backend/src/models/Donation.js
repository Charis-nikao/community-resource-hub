const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  request: { type: mongoose.Schema.Types.ObjectId, ref: 'Request' },
  type: { type: String, enum: ['money','item','service'], default: 'item' },
  message: { type: String },
  status: { type: String, enum: ['pending','completed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Donation', DonationSchema);
