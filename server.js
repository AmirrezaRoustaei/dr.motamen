const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/drmotamen', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Appointment = mongoose.model('Appointment', new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  service: String,
  note: String
}, { timestamps: true }));

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/appointments', async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.json({ success: true, appointment });
  } catch (err) {
    res.status(500).json({ success: false, message: 'خطا در ذخیره‌سازی' });
  }
});

app.get('/api/appointments', async (req, res) => {
  const list = await Appointment.find().sort({ createdAt: -1 });
  res.json(list);
});

app.listen(4000, () => console.log('✅ Server running on http://localhost:4000'));
