const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (req, res) => {
  // registration logic
};

const loginUser = async (req, res) => {
  // login logic
};

module.exports = { registerUser, loginUser };