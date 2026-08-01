"use client";

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <img 
                src="/logo.jpeg" 
                alt="Manjula Binding Works" 
                style={{ height: '48px', width: '48px', borderRadius: '50%', border: '1.5px solid var(--accent-gold)' }} 
              />
              <div>
                <h3 className={lang === 'mr' ? 'marathi-text' : ''} style={{ margin: 0, fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
                  {t.nav.brand} {t.nav.brandSuffix} {lang === 'en' ? 'Works' : 'वर्क्स'}
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#D4AF37', margin: 0 }}>Est. 1975 • Solapur</p>
              </div>
            </div>
            <p style={{ color: '#E2D9D2', lineHeight: '1.6' }}>
              {t.contact.address}<br />
              {t.footer.tagline}
            </p>
          </div>

          <div className="footer-col">
            <h3>{t.footer.navTitle}</h3>
            <Link href="/">{t.nav.home}</Link>
            <Link href="/shop">{t.nav.catalog}</Link>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
          </div>

          <div className="footer-col">
            <h3>{t.footer.featuresTitle}</h3>
            <p>{t.footer.feat1}</p>
            <p>{t.footer.feat2}</p>
            <p>{t.footer.feat3}</p>
            <p>{t.footer.feat4}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Manjula Binding Works. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
