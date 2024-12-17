const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const config = require('./config/production');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/api/auth.routes'));
app.use('/api/products', require('./routes/api/product.routes'));
app.use('/api/orders', require('./routes/api/order.routes'));
app.use('/api/payments', require('./routes/api/payment.routes'));
app.use('/api/upload', require('./routes/api/upload.routes'));

// MongoDB Connection
mongoose.connect(config.mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));