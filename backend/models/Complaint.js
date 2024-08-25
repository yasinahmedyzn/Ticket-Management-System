const mongoose = require('mongoose');
const ComplaintSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'Open' }  // 'Open', 'In Progress', 'Closed'
  });
  module.exports = mongoose.model('Complaint', ComplaintSchema);