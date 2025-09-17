const API_BASE = "http://localhost:4000";

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("پیام شما با موفقیت ارسال شد!");
  this.reset();
});

document.getElementById("appointmentForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());

  try {
    const res = await fetch(API_BASE + "/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (result.success) {
      alert("✅ نوبت شما ثبت شد!");
      this.reset();
    } else {
      alert("❌ خطا در ثبت نوبت");
    }
  } catch (err) {
    alert("❌ ارتباط با سرور برقرار نشد");
  }
});
