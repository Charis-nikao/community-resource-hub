const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'change_this_secret', { expiresIn: '30d' });
};

module.exports = generateToken;
