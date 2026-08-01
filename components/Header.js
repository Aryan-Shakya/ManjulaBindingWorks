"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t, lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="navbar glass">
      <div className="container">
        {/* Brand Logo */}
        <Link href="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <img 
            src="/logo.jpeg" 
            alt="Manjula Binding Works Logo" 
            style={{ 
              height: '46px', 
              width: '46px', 
              borderRadius: '50%',
              border: '2px solid var(--accent-gold)',
              boxShadow: '0 4px 12px rgba(78, 0, 43, 0.15)',
              flexShrink: 0
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
            <span className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '1.45rem', color: 'var(--primary)', fontWeight: '700' }}>
              {t.nav.brand} <span style={{ color: 'var(--accent-red)' }}>{t.nav.brandSuffix}</span>
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--secondary)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              {t.nav.brandSub}
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav-group" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className="nav-links">
            <Link href="/" className={lang === 'mr' ? 'marathi-text' : ''}>{t.nav.home}</Link>
            <Link href="/shop" className={lang === 'mr' ? 'marathi-text' : ''}>{t.nav.catalog}</Link>
            <Link href="/about" className={lang === 'mr' ? 'marathi-text' : ''}>{t.nav.about}</Link>
            <Link href="/contact" className={lang === 'mr' ? 'marathi-text' : ''}>{t.nav.contact}</Link>
          </div>
          
          <LanguageToggle />
        </div>

        {/* Mobile Header Right: Language Toggle + Hamburger Button */}
        <div className="mobile-header-actions" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
          <LanguageToggle />
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'var(--primary)',
              color: 'var(--accent-gold)',
              border: '1px solid var(--accent-gold)',
              borderRadius: '10px',
              width: '42px',
              height: '42px',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(78,0,43,0.15)'
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <div className="mobile-drawer-content">
            <div className="mobile-nav-links">
              <Link 
                href="/" 
                className={lang === 'mr' ? 'marathi-text mobile-nav-item' : 'mobile-nav-item'}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>🏠</span> {t.nav.home}
              </Link>

              <Link 
                href="/shop" 
                className={lang === 'mr' ? 'marathi-text mobile-nav-item' : 'mobile-nav-item'}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>📚</span> {t.nav.catalog}
              </Link>

              <Link 
                href="/about" 
                className={lang === 'mr' ? 'marathi-text mobile-nav-item' : 'mobile-nav-item'}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>🏛️</span> {t.nav.about}
              </Link>

              <Link 
                href="/contact" 
                className={lang === 'mr' ? 'marathi-text mobile-nav-item' : 'mobile-nav-item'}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>📞</span> {t.nav.contact}
              </Link>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-gold)' }}>
              <a
                href="https://wa.me/919850088537"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: '#FFF',
                  textAlign: 'center',
                  padding: '0.85rem',
                  fontSize: '1rem',
                  borderRadius: '50px'
                }}
              >
                💬 Order on WhatsApp (+91 98500 88537)
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
