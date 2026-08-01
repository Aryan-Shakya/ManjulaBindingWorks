"use client";

import { useLanguage } from './LanguageContext';

export default function ContactForm() {
  const { t, lang } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.elements['contact-name'].value;
    const phone = form.elements['contact-phone'].value;
    const email = form.elements['contact-email'].value;
    const subject = form.elements['contact-subject'].value;
    const product = form.elements['contact-product'].value;
    const message = form.elements['contact-message'].value;

    const formattedMessage = `Hello Manjula Binding Works,\n\nI would like to make an inquiry:\n\n*Name:* ${name}\n*Phone:* ${phone}${email ? `\n*Email:* ${email}` : ''}\n*Subject:* ${subject}${product ? `\n*Product Type:* ${product}` : ''}\n*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/919850088537?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-form-panel animate-fade-in-up delay-200">
      <h2 className={lang === 'mr' ? 'contact-form-title marathi-text' : 'contact-form-title'}>
        {t.contact.formTitle}
      </h2>
      <p className="contact-form-sub">
        {t.contact.formSub}
      </p>

      <form onSubmit={handleSubmit}>
        {/* Row 1: Name + Phone */}
        <div className="form-row">
          <div className="form-group">
            <label className={lang === 'mr' ? 'form-label marathi-text' : 'form-label'} htmlFor="contact-name">
              {t.contact.fullName} <span style={{ color: 'var(--accent-red)' }}>*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              className="form-control"
              placeholder={t.contact.fullNamePlaceholder}
              required
            />
          </div>

          <div className="form-group">
            <label className={lang === 'mr' ? 'form-label marathi-text' : 'form-label'} htmlFor="contact-phone">
              {t.contact.mobile} <span style={{ color: 'var(--accent-red)' }}>*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              className="form-control"
              placeholder={t.contact.mobilePlaceholder}
              required
            />
          </div>
        </div>

        {/* Row 2: Email + Subject */}
        <div className="form-row">
          <div className="form-group">
            <label className={lang === 'mr' ? 'form-label marathi-text' : 'form-label'} htmlFor="contact-email">
              {t.contact.email}
            </label>
            <input
              id="contact-email"
              type="email"
              className="form-control"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          <div className="form-group">
            <label className={lang === 'mr' ? 'form-label marathi-text' : 'form-label'} htmlFor="contact-subject">
              {t.contact.subject} <span style={{ color: 'var(--accent-red)' }}>*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              className="form-control"
              placeholder={t.contact.subjectPlaceholder}
              required
            />
          </div>
        </div>

        {/* Row 3: Product Type dropdown */}
        <div className="form-group">
          <label className={lang === 'mr' ? 'form-label marathi-text' : 'form-label'} htmlFor="contact-product">
            {t.contact.productType}
          </label>
          <select id="contact-product" className="form-control">
            <option value="">{t.contact.selectProduct}</option>
            <option value="Notebooks">{t.contact.prodNotebooks}</option>
            <option value="Ledger Books">{t.contact.prodLedger}</option>
            <option value="Office Registers">{t.contact.prodRegister}</option>
            <option value="Voucher Files">{t.contact.prodVoucher}</option>
            <option value="Drawing Books">{t.contact.prodDrawing}</option>
            <option value="Custom Order">{t.contact.prodCustom}</option>
          </select>
        </div>

        {/* Row 4: Message */}
        <div className="form-group">
          <label className={lang === 'mr' ? 'form-label marathi-text' : 'form-label'} htmlFor="contact-message">
            {t.contact.message} <span style={{ color: 'var(--accent-red)' }}>*</span>
          </label>
          <textarea
            id="contact-message"
            className="form-control"
            rows={5}
            placeholder={t.contact.messagePlaceholder}
            required
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{ 
            width: '100%', 
            padding: '1rem', 
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            border: 'none',
            color: '#FFF'
          }}
        >
          {t.contact.sendBtn}
        </button>
      </form>
    </div>
  );
}
