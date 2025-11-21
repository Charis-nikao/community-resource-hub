const express = require('express');
const router = express.Router();
const { getChatByRequest } = require('../controllers/chatController');

router.get('/:requestId', getChatByRequest);

module.exports = router;
