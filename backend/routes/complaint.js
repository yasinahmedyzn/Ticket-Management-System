const express = require('express');
const { createComplaint, getComplaints, updateComplaint } = require('../controllers/complaintController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createComplaint);
router.get('/', auth, getComplaints);
router.put('/:id', auth, updateComplaint);

module.exports = router;