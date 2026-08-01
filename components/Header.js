"use client";

import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t, lang } = useLanguage();

  return (
    <nav className="navbar glass">
      <div className="container">
        <Link href="/" className="logo">
          <img 
            src="/logo.jpeg" 
            alt="Manjula Binding Works Logo" 
            style={{ 
              height: '52px', 
              width: '52px', 
              borderRadius: '50%',
              border: '2px solid var(--accent-gold)',
              boxShadow: '0 4px 12px rgba(78, 0, 43, 0.15)'
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
            <span className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '1.6rem', color: 'var(--primary)', fontWeight: '700' }}>
              {t.nav.brand} <span style={{ color: 'var(--accent-red)' }}>{t.nav.brandSuffix}</span>
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {t.nav.brandSub}
            </span>
          </div>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className="nav-links">
            <Link href="/" className={lang === 'mr' ? 'marathi-text' : ''}>{t.nav.home}</Link>
            <Link href="/shop" className={lang === 'mr' ? 'marathi-text' : ''}>{t.nav.catalog}</Link>
            <Link href="/about" className={lang === 'mr' ? 'marathi-text' : ''}>{t.nav.about}</Link>
            <Link href="/contact" className={lang === 'mr' ? 'marathi-text' : ''}>{t.nav.contact}</Link>
          </div>
          
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
