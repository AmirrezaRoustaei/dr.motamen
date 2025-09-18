const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/drmotamen', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// مدل نوبت
const Appointment = mongoose.model('Appointment', new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  service: String,
  note: String,
  ip: String   // ✅ اضافه شد
}, { timestamps: true }));

const app = express();
app.use(cors());
app.use(express.json());

// گرفتن آی‌پی کاربر
function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress
    || null;
}

// ثبت نوبت با آی‌پی
app.post('/api/appointments', async (req, res) => {
  try {
    const clientIp = getClientIp(req);
    const appointment = await Appointment.create({
      ...req.body,
      ip: clientIp   // ✅ ذخیره آی‌پی
    });
    res.json({ success: true, appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'خطا در ذخیره‌سازی' });
  }
});

// گرفتن لیست نوبت‌ها (با آی‌پی‌ها)
app.get('/api/appointments', async (req, res) => {
  const list = await Appointment.find().sort({ createdAt: -1 });
  res.json(list);
});

app.listen(4000, () => console.log('✅ Server running on http://localhost:4000'));

  res.json(list);
});

app.listen(4000, () => console.log('✅ Server running on http://localhost:4000'));
