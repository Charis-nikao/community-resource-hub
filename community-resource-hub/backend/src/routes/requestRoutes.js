const express = require('express');
const router = express.Router();
const { createRequest, getRequests, getRequest, matchRequest } = require('../controllers/requestController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createRequest);
router.get('/', getRequests);
router.get('/:id', getRequest);
router.patch('/:id/fulfill', authMiddleware, matchRequest);

module.exports = router;
