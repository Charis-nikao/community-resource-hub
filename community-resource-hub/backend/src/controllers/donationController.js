const Donation = require('../models/Donation');

exports.createDonation = async (req, res, next) => {
  try {
    const { requestId, type, message } = req.body;
    const donation = await Donation.create({
      user: req.userId,
      request: requestId || null,
      type, message
    });
    res.status(201).json(donation);
  } catch (err) { next(err); }
};

exports.getDonations = async (req, res, next) => {
  try {
    const donations = await Donation.find().populate('user', 'name email');
    res.json(donations);
  } catch (err) { next(err); }
};
