"use client";

import ContactForm from './ContactForm';
import { useLanguage } from './LanguageContext';

export default function ContactClient() {
  const { t, lang } = useLanguage();

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container">

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className={lang === 'mr' ? 'marathi-text' : ''} style={{
            color: 'var(--accent-saffron)',
            fontSize: '1.05rem',
            background: 'var(--accent-gold-light)',
            padding: '0.4rem 1.2rem',
            borderRadius: '30px',
            border: '1px solid var(--border-gold)',
            display: 'inline-block',
            marginBottom: '1.25rem'
          }}>
            {t.contact.tag}
          </span>
          <h1 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>
            {t.contact.title}
          </h1>
          <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto' }}>
            {t.contact.subtitle}
          </p>
        </div>

        {/* Two-column Layout */}
        <div className="contact-page-grid">

          {/* LEFT — Contact Details Sidebar */}
          <div className="animate-fade-in-up">
            <h2 className={lang === 'mr' ? 'contact-sidebar-title marathi-text' : 'contact-sidebar-title'}>
              {t.contact.sidebarTitle}
            </h2>
            <p className="contact-sidebar-sub">
              {t.contact.sidebarSub}
            </p>

            {/* Address */}
            <div className="contact-detail-card">
              <div className="contact-detail-icon">📍</div>
              <div className="contact-detail-text">
                <h4 className={lang === 'mr' ? 'marathi-text' : ''}>{t.contact.addressTitle}</h4>
                <p>{t.contact.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-detail-card">
              <div className="contact-detail-icon">📞</div>
              <div className="contact-detail-text">
                <h4 className={lang === 'mr' ? 'marathi-text' : ''}>{t.contact.phoneTitle}</h4>
                <p>
                  <a href="tel:+919999217000">+91 99992 17000</a><br />
                  <span style={{ fontSize: '0.85rem', color: '#999' }}>{t.contact.phoneSub}</span>
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="contact-detail-card">
              <div className="contact-detail-icon">🗺️</div>
              <div className="contact-detail-text">
                <h4 className={lang === 'mr' ? 'marathi-text' : ''}>{t.contact.mapsTitle}</h4>
                <a
                  href="https://maps.app.goo.gl/bDvL6WbX9Nko9zTLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: '600',
                    color: 'var(--accent-red)',
                    marginTop: '0.3rem'
                  }}
                >
                  {t.contact.mapsBtn}
                </a>
              </div>
            </div>

            {/* Business Hours Badge */}
            <div className="hours-badge">
              <span style={{ fontSize: '1.5rem' }}>🕘</span>
              <span>
                <strong>{t.contact.hoursTitle}</strong><br />
                {t.contact.hoursText}
              </span>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <ContactForm />

        </div>
      </div>
    </div>
  );
}
