const Request = require('../models/Request');

exports.createRequest = async (req, res, next) => {
  try {
    const { title, description, category, urgency, location } = req.body;
    const request = await Request.create({
      user: req.userId,
      title, description, category, urgency, location
    });
    res.status(201).json(request);
  } catch (err) { next(err); }
};

exports.getRequests = async (req, res, next) => {
  try {
    const requests = await Request.find().populate('user', 'name email');
    res.json(requests);
  } catch (err) { next(err); }
};

exports.getRequest = async (req, res, next) => {
  try {
    const request = await Request.findById(req.params.id).populate('user', 'name email');
    if (!request) return res.status(404).json({ message: 'Not found' });
    res.json(request);
  } catch (err) { next(err); }
};

exports.matchRequest = async (req, res, next) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).json({ message: 'Not found' });
    request.status = 'matched';
    request.matchedWith = req.userId;
    await request.save();
    res.json(request);
  } catch (err) { next(err); }
};
