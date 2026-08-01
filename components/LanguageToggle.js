"use client";

import { useLanguage } from './LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-gold)',
      borderRadius: '30px',
      padding: '2px',
      boxShadow: '0 2px 8px rgba(78, 0, 43, 0.08)'
    }}>
      <button
        onClick={() => toggleLanguage('en')}
        style={{
          padding: '0.35rem 0.85rem',
          borderRadius: '20px',
          border: 'none',
          background: lang === 'en' ? 'var(--primary)' : 'transparent',
          color: lang === 'en' ? '#FFF' : 'var(--primary)',
          fontSize: '0.85rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'var(--transition)'
        }}
      >
        EN
      </button>

      <button
        onClick={() => toggleLanguage('mr')}
        style={{
          padding: '0.35rem 0.85rem',
          borderRadius: '20px',
          border: 'none',
          background: lang === 'mr' ? 'var(--primary)' : 'transparent',
          color: lang === 'mr' ? '#FFF' : 'var(--primary)',
          fontSize: '0.85rem',
          fontWeight: '700',
          fontFamily: 'var(--font-marathi)',
          cursor: 'pointer',
          transition: 'var(--transition)'
        }}
      >
        मराठी
      </button>
    </div>
  );
}
