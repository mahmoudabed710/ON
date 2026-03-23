import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const serviceOptions = [
  'الحملات التسويقية',
  'التصميم والهوية',
  'صناعة المحتوى & تصوير',
  'إدارة منصات التواصل',
];

export default function ContactSection() {
  const ref = useScrollAnimation(0.1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const inputCls =
    'w-full bg-white border border-[#e0e0e0] rounded-xl px-4 py-3 font-tajawal text-[16px] text-[#3e3e3e] placeholder:text-[#aaa] focus:outline-none focus:border-on-teal transition-colors text-end';

  return (
    <section
      id="contact"
      className="bg-on-dark py-20 px-6 md:px-10 lg:px-16"
      aria-label="تواصل معنا"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="font-tajawal font-extrabold text-on-teal text-end mb-12"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          تواصل معنا
        </h2>

        {/*
          RTL flex row:
          - First child → RIGHT → form
          - Last child  → LEFT  → image
        */}
        <div ref={ref} className="section-fade flex flex-col lg:flex-row gap-10 lg:gap-[88px] items-start">

          {/* Form — first child → RIGHT in RTL */}
          <div className="lg:flex-1">
            {submitted ? (
              <div className="flex items-center justify-center h-48 rounded-2xl bg-on-values/30 border border-on-teal/40">
                <p className="font-tajawal text-on-teal text-xl font-bold">
                  ✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Row 1: Name + Email */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="name" className="font-tajawal font-medium text-[18px] text-text-muted text-end">
                      الاسم الكامل*
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="علي محمد"
                      className={inputCls}
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="email" className="font-tajawal font-medium text-[18px] text-text-muted text-end">
                      البريد الإلكتروني*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Alimohamed77@gmail.com"
                      className={inputCls}
                      dir="ltr"
                      style={{ textAlign: 'right' }}
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Service */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="phone" className="font-tajawal font-medium text-[18px] text-text-muted text-end">
                      رقم الهاتف*
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="01285667432"
                      className={inputCls}
                      dir="ltr"
                      style={{ textAlign: 'right' }}
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="service" className="font-tajawal font-medium text-[18px] text-text-muted text-end">
                      الخدمة المطلوبة*
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className={`${inputCls} appearance-none cursor-pointer`}
                        aria-required="true"
                      >
                        <option value="" disabled>تصميم هوية</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <img
                        src="/assets/icon-chevron.svg"
                        alt=""
                        className="absolute start-4 top-1/2 -translate-y-1/2 w-3 h-2 pointer-events-none"
                        style={{ filter: 'brightness(0)' }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-tajawal font-medium text-[18px] text-text-muted text-end">
                    رسالتك
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="teal-btn px-10"
                  >
                    إرسال
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Image — last child → LEFT in RTL */}
          <div className="lg:w-[38%] flex-shrink-0 order-first lg:order-none">
            <img
              src="/assets/contact-image.png"
              alt="فريق ON Digital Solutions في اجتماع عمل"
              className="w-full h-full max-h-[500px] object-cover rounded-[20px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
