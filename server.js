const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// اتصال به دیتابیس MongoDB
mongoose.connect('mongodb://217.144.104.6:27017/drmotamen', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// مدل نوبت
const Appointment = mongoose.model('Appointment', new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  service: String,
  note: String,
  ip: String
}, { timestamps: true }));

const app = express();
app.use(cors());
app.use(express.json());

// تابع گرفتن آی‌پی کاربر
function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress
    || null;
}

// ➕ ثبت نوبت
app.post('/api/appointments', async (req, res) => {
  try {
    const clientIp = getClientIp(req);
    const appointment = await Appointment.create({
      ...req.body,
      ip: clientIp
    });
    res.json({ success: true, appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'خطا در ذخیره‌سازی' });
  }
});

// 📋 گرفتن لیست همه نوبت‌ها
app.get('/api/appointments', async (req, res) => {
  try {
    const list = await Appointment.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ success: false, message: 'خطا در دریافت اطلاعات' });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
