const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { 
  register, 
  login, 
  verifyEmail,
  resendVerification,
  forgotPassword,
  resetPassword,
  changePassword,
  getCurrentUser,
  registerVendor
} = require('../../controllers/auth.controller');

// Public routes
router.post('/register', register);
router.post('/login', login);
router.get('/verify-email/:token', verifyEmail);
router.post('/resend-verification', resendVerification);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

// Protected routes
router.use(auth);
router.get('/me', getCurrentUser);
router.put('/change-password', changePassword);
router.post('/vendor/register', registerVendor);

module.exports = router;