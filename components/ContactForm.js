"use client";

import { useLanguage } from './LanguageContext';

export default function ContactForm() {
  const { t, lang } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.contact.successAlert);
    e.target.reset();
  };

  return (
    <div className="contact-form-panel animate-fade-in-up delay-200">
      <h2 className={lang === 'mr' ? 'contact-form-title marathi-text' : 'contact-form-title'}>
        {t.contact.formTitle}
      </h2>
      <p className="contact-form-sub">
        {t.contact.formSub}
      </p>

      <form onSubmit={handleSubmit} noValidate>
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
            <option value="notebook">{t.contact.prodNotebooks}</option>
            <option value="ledger">{t.contact.prodLedger}</option>
            <option value="register">{t.contact.prodRegister}</option>
            <option value="voucher">{t.contact.prodVoucher}</option>
            <option value="drawing">{t.contact.prodDrawing}</option>
            <option value="custom">{t.contact.prodCustom}</option>
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

        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
          {t.contact.sendBtn}
        </button>
      </form>
    </div>
  );
}
