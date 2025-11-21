const Chat = require('../models/Chat');

exports.getChatByRequest = async (req, res, next) => {
  try {
    const messages = await Chat.find({ request: req.params.requestId }).populate('sender', 'name');
    res.json(messages);
  } catch (err) { next(err); }
};
