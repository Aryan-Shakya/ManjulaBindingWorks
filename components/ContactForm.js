"use client";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे! आम्ही लवकरच तुमच्याशी संपर्क साधू.');
    e.target.reset();
  };

  return (
    <div className="contact-form-panel animate-fade-in-up delay-200">
      <h2 className="contact-form-title">संदेश पाठवा</h2>
      <p className="contact-form-sub">
        ऑर्डर, घाऊक खरेदी किंवा इतर चौकशीसाठी खालील फॉर्म भरा. (Send us a message below)
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Row 1: Name + Phone */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">
              तुमचे नाव (Full Name) <span style={{ color: 'var(--accent-red)' }}>*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              className="form-control"
              placeholder="उदा. राहुल माने"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-phone">
              मोबाइल नंबर (Mobile) <span style={{ color: 'var(--accent-red)' }}>*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              className="form-control"
              placeholder="+91 98765 43210"
              required
            />
          </div>
        </div>

        {/* Row 2: Email + Subject */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">
              ईमेल (Email)
            </label>
            <input
              id="contact-email"
              type="email"
              className="form-control"
              placeholder="example@email.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-subject">
              विषय (Subject) <span style={{ color: 'var(--accent-red)' }}>*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              className="form-control"
              placeholder="उदा. लेजर बुक ऑर्डर"
              required
            />
          </div>
        </div>

        {/* Row 3: Product Type dropdown */}
        <div className="form-group">
          <label className="form-label" htmlFor="contact-product">
            उत्पादनाचा प्रकार (Product Type)
          </label>
          <select id="contact-product" className="form-control">
            <option value="">— निवडा (Select) —</option>
            <option value="notebook">वह्या / Notebooks</option>
            <option value="ledger">लेजर बुक / Ledger Books</option>
            <option value="register">ऑफिस रजिस्टर / Office Registers</option>
            <option value="voucher">व्हाउचर फाइल / Voucher Files</option>
            <option value="drawing">ड्रॉइंग बुक / Drawing Books</option>
            <option value="custom">कस्टम ऑर्डर / Custom Order</option>
          </select>
        </div>

        {/* Row 4: Message */}
        <div className="form-group">
          <label className="form-label" htmlFor="contact-message">
            तुमचा संदेश (Message) <span style={{ color: 'var(--accent-red)' }}>*</span>
          </label>
          <textarea
            id="contact-message"
            className="form-control"
            rows={5}
            placeholder="ऑर्डरबद्दल अधिक तपशील इथे लिहा — जसे की प्रमाण, आकार, पानांची संख्या..."
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
          ✦ &nbsp; संदेश पाठवा (Send Message)
        </button>
      </form>
    </div>
  );
}
