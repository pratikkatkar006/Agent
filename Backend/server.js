const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'rzp_test_BSj1LLEYKca6Cb',
  key_secret: 'HbRlEwEgmdSIMOllrTP1QSGN'
});

// Create order endpoint
app.post('/create-order', async (req, res) => {
  const options = {
    amount: 10000, // ₹100 in paise
    currency: 'INR',
    receipt: 'receipt#1',
    payment_capture: 1
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating order');
  }
});

// Verify payment endpoint
app.post('/verify-payment', (req, res) => {
  // Implement payment verification logic
  // This is crucial for security
});

app.listen(3001, () => console.log('Server running on port 3001'));