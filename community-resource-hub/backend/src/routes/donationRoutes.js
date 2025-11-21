const express = require('express');
const router = express.Router();
const { createDonation, getDonations } = require('../controllers/donationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createDonation);
router.get('/', getDonations);

module.exports = router;
