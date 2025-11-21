require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const User = require('./models/User');
const Request = require('./models/Request');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/community-hub';

const seed = async () => {
  await connectDB(MONGO_URI);
  await User.deleteMany({});
  await Request.deleteMany({});

  const user = await User.create({ name: 'Alice', email: 'alice@example.com', password: 'password123', role: 'user', location: 'Nairobi' });
  const vol = await User.create({ name: 'Bob', email: 'bob@example.com', password: 'password123', role: 'volunteer', location: 'Nairobi' });

  await Request.create({
    user: user._id,
    title: 'Need food support',
    description: 'Family of 4, need non-perishables',
    category: 'food',
    urgency: 'high',
    location: 'Nairobi'
  });

  console.log('Seeded sample users and requests');
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });
