// لیست مقالات فارسی
const articlesFA = [
  {
    title: "عنوان مقاله اول",
    desc: "توضیح کوتاه درباره مقاله اول...",
    link: "https://example.com/article1",
    linkText: "مطالعه مقاله"
  },
  {
    title: "عنوان مقاله دوم",
    desc: "توضیح کوتاه درباره مقاله دوم...",
    link: "https://example.com/article2",
    linkText: "مطالعه مقاله"
  },
  {
    title: "عنوان مقاله سوم",
    desc: "توضیح کوتاه درباره مقاله سوم...",
    link: "https://example.com/article3",
    linkText: "مطالعه مقاله"
  }
];

// لیست مقالات انگلیسی
const articlesEN = [
  {
    title: "First Article",
    desc: "A short description about the first article...",
    link: "https://example.com/article1",
    linkText: "Read Article"
  },
  {
    title: "Second Article",
    desc: "A short description about the second article...",
    link: "https://example.com/article2",
    linkText: "Read Article"
  },
  {
    title: "Third Article",
    desc: "A short description about the third article...",
    link: "https://example.com/article3",
    linkText: "Read Article"
  }
];

// تابع برای نمایش مقالات
function renderArticles(lang) {
  const list = document.getElementById("articlesList");
  list.innerHTML = "";

  const data = lang === "en" ? articlesEN : articlesFA;

  data.forEach(article => {
    const div = document.createElement("div");
    div.className = "article-item";
    div.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.desc}</p>
      <a href="${article.link}" target="_blank">${article.linkText}</a>
    `;
    list.appendChild(div);
  });
}

// تابع تغییر زبان (اینجا اون خط renderArticles(lang) رو گذاشتم)
function setLanguage(lang) {
  if (lang === "en") {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";

    document.getElementById("pageTitle").innerText = "Dr. Motamen Clinic";
    document.getElementById("headerTitle").innerText = "Dr. MohammadHossein Motamen";
    document.getElementById("headerSubtitle").innerText = "Orthopedic Specialist — 13 years of experience";

    document.getElementById("navAbout").innerText = "About";
    document.getElementById("navServices").innerText = "Services";
    document.getElementById("navArticles").innerText = "Articles";
    document.getElementById("navAppointment").innerText = "Appointments";
    document.getElementById("navContact").innerText = "Contact";

    document.getElementById("aboutTitle").innerText = "About Dr. Motamen";
    document.getElementById("aboutText").innerText = "Dr. MohammadHossein Motamen, orthopedic subspecialist with over 13 years of experience treating bone, joint, and spine problems.";

    document.getElementById("licenseLabel").innerText = "Clinic License Number:";
    document.getElementById("medicalIdLabel").innerText = "Medical Council Number:";

    document.getElementById("servicesTitle").innerText = "Services";
    document.getElementById("servicesList").innerHTML = `
      <li>Knee and hip joint replacement surgery</li>
      <li>Treatment of fractures and sports injuries</li>
      <li>Correction of spinal deformities</li>
      <li>Post-surgery physiotherapy and rehabilitation</li>
    `;

    document.getElementById("articlesTitle").innerText = "Articles & Education";
    document.getElementById("articlesText").innerText = "Here you can read scientific articles and educational materials related to orthopedics.";

    document.getElementById("degreeTitle").innerText = "Medical Certificates & Degrees";
    document.getElementById("swissCaption").innerText = "Medical Card (Switzerland)";
    document.getElementById("frenchCaption").innerText = "Medical Degree (France)";
    document.getElementById("degreeNote").innerText = "(The images are shown in reduced size. Click to enlarge in the final version.)";

    document.getElementById("appointmentTitle").innerText = "Online Appointment";
    document.getElementById("inputName").placeholder = "Full Name";
    document.getElementById("inputPhone").placeholder = "Phone Number";
    document.getElementById("inputDate").placeholder = "Date";
    document.getElementById("inputService").options[0].text = "Select Service";
    document.getElementById("inputService").options[1].text = "Specialist Visit";
    document.getElementById("inputService").options[2].text = "Joint Replacement";
    document.getElementById("inputService").options[3].text = "Ligament Repair";
    document.getElementById("inputService").options[4].text = "Rehabilitation";
    document.getElementById("inputNote").placeholder = "Additional Notes (optional)";
    document.getElementById("submitAppointment").innerText = "Submit Appointment";

    document.getElementById("contactTitle").innerText = "Contact Us";
    document.getElementById("contactName").placeholder = "Full Name";
    document.getElementById("contactEmail").placeholder = "Email";
    document.getElementById("contactMessage").placeholder = "Your Message";
    document.getElementById("submitContact").innerText = "Send Message";
    document.getElementById("address").innerHTML = "<strong>Clinic Address:</strong> Tehran, Chitgar District 22 ...";
    document.getElementById("phone").innerHTML = "<strong>Phone:</strong> +98-21-4419";

    document.getElementById("footerText").innerText = "© 2025 All rights reserved.";
  }

  else if (lang === "fa") {
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";

    document.getElementById("pageTitle").innerText = "کلینیک دکتر محمدحسین مؤتمن";
    document.getElementById("headerTitle").innerText = "دکتر محمدحسین مؤتمن";
    document.getElementById("headerSubtitle").innerText = "فوق تخصص ارتوپدی — ۱۳ سال تجربه";

    document.getElementById("navAbout").innerText = "درباره دکتر";
    document.getElementById("navServices").innerText = "خدمات";
    document.getElementById("navArticles").innerText = "مقالات";
    document.getElementById("navAppointment").innerText = "نوبت‌دهی";
    document.getElementById("navContact").innerText = "تماس";

    document.getElementById("aboutTitle").innerText = "درباره دکتر";
    document.getElementById("aboutText").innerText = "دکتر محمدحسین مؤتمن، فوق تخصص ارتوپدی با بیش از ۱۳ سال تجربه در درمان مشکلات استخوان، مفاصل و ستون فقرات.";

    document.getElementById("licenseLabel").innerText = "شماره جواز کلینیک:";
    document.getElementById("medicalIdLabel").innerText = "شماره نظام پزشکی:";

    document.getElementById("servicesTitle").innerText = "خدمات";
    document.getElementById("servicesList").innerHTML = `
      <li>جراحی تعویض مفصل زانو و لگن</li>
      <li>درمان شکستگی‌ها و آسیب‌های ورزشی</li>
      <li>اصلاح انحراف ستون فقرات</li>
      <li>فیزیوتراپی و توان‌بخشی پس از عمل</li>
    `;

    document.getElementById("articlesTitle").innerText = "مقالات و آموزش‌ها";
    document.getElementById("articlesText").innerText = "در این بخش می‌توانید مقالات علمی و آموزش‌های مرتبط با ارتوپدی را مطالعه کنید.";

    document.getElementById("degreeTitle").innerText = "مدارک و سوابق تحصیلی";
    document.getElementById("swissCaption").innerText = "کارت پزشکی (سوئیس)";
    document.getElementById("frenchCaption").innerText = "مدرک پزشکی (فرانسه)";
    document.getElementById("degreeNote").innerText = "(تصاویر مدارک برای نمایش کوچک شده‌اند، روی نسخه نهایی می‌توانید با کلیک بزرگنمایی کنید)";

    document.getElementById("appointmentTitle").innerText = "نوبت‌دهی آنلاین";
    document.getElementById("inputName").placeholder = "نام و نام خانوادگی";
    document.getElementById("inputPhone").placeholder = "شماره تلفن همراه";
    document.getElementById("inputDate").placeholder = "تاریخ";
    document.getElementById("inputService").options[0].text = "انتخاب خدمت";
    document.getElementById("inputService").options[1].text = "ویزیت تخصصی";
    document.getElementById("inputService").options[2].text = "تعویض مفصل";
    document.getElementById("inputService").options[3].text = "ترمیم لیگامان";
    document.getElementById("inputService").options[4].text = "توان‌بخشی";
    document.getElementById("inputNote").placeholder = "توضیحات بیشتر (اختیاری)";
    document.getElementById("submitAppointment").innerText = "ثبت نوبت";

    document.getElementById("contactTitle").innerText = "تماس با ما";
    document.getElementById("contactName").placeholder = "نام و نام خانوادگی";
    document.getElementById("contactEmail").placeholder = "ایمیل";
    document.getElementById("contactMessage").placeholder = "پیام شما";
    document.getElementById("submitContact").innerText = "ارسال پیام";
    document.getElementById("address").innerHTML = "<strong>آدرس کلینیک:</strong> تهران، چیتگر منطقه 22 ...";
    document.getElementById("phone").innerHTML = "<strong>شماره تماس:</strong> ۴۴۱۹-۰۲۱";

    document.getElementById("footerText").innerText = "© 2025 تمامی حقوق محفوظ است.";
  }

  // این خط کلیدیه: لیست مقالات رو همزمان با تغییر زبان دوباره بسازه
  renderArticles(lang);
}
