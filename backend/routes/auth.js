// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// // REGISTER
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
    
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User already exists" });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // LOGIN
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
//     res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET ALL USERS (Admin View)
// router.get('/users', async (req, res) => {
//   try {
//     // Find all users, but exclude their passwords for security!
//     const users = await User.find({}, { password: 0 });
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.resolve ? express.Router() : express.Router();

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, adminCode } = req.body;

    // NEW: The Security Check!
    // If they want to be an admin, they MUST provide the correct secret key
    if (role === 'admin') {
      if (adminCode !== process.env.ADMIN_SECRET_KEY) {
        return res.status(403).json({ message: 'Invalid Admin Secret Key. Access Denied.' });
      }
    }
    
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'student'
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.status(200).json({
      token,
      // NEW: We are sending the role back to React!
      user: { id: user.id, name: user.name, email: user.email, role: user.role } 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL USERS (Admin View)
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE USER (Admin Only)
router.delete('/users/:id', async (req, res) => {
  try {
    // Tell Sequelize to destroy the user with the matching ID
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    
    if (!deleted) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;