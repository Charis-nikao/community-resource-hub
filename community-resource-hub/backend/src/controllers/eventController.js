const Event = require('../models/Event');

exports.createEvent = async (req, res, next) => {
  try {
    const { title, description, date, location, category } = req.body;
    const event = await Event.create({ title, description, date, location, category });
    res.status(201).json(event);
  } catch (err) { next(err); }
};

exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) { next(err); }
};
