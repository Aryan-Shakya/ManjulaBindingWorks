"use client";

import Link from 'next/link';
import { useLanguage } from '../components/LanguageContext';

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Abstract Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fade-in-up">
              <div className={lang === 'mr' ? 'marathi-text' : ''} style={{ 
                fontSize: '1.05rem', 
                color: 'var(--accent-saffron)', 
                marginBottom: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--accent-gold-light)',
                padding: '0.4rem 1rem',
                borderRadius: '30px',
                border: '1px solid var(--border-gold)'
              }}>
                {t.home.tag}
              </div>
              
              <h1 className={lang === 'mr' ? 'hero-title marathi-text' : 'hero-title'}>
                {t.home.title} <br />
                <span style={{ color: 'var(--accent-red)' }}>{t.home.titleAccent}</span>
              </h1>
              
              <p className="hero-subtitle">
                {t.home.subtitle}
              </p>
              
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="/shop" className="btn btn-primary">
                  {t.home.viewCatalog}
                </Link>
                <Link href="/about" className="btn btn-outline">
                  {t.home.ourStory}
                </Link>
              </div>
            </div>

            <div className="hero-image-container animate-fade-in-up delay-200">
              <div className="hero-arch-wrapper">
                <img 
                  src="/images/hero_abstract.png" 
                  alt="Manjula Binding Craft" 
                  className="hero-arch-img" 
                />
                <div className="floating-motif">
                  <span className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '1rem', fontWeight: '700' }}>
                    {t.home.badge1975}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in-up">
            <h2 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              {t.home.whyChooseTitle}
            </h2>
            <p style={{ color: 'var(--secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
              {t.home.whyChooseSub}
            </p>
          </div>
          
          <div className="products-grid">
            <div className="contact-info-card animate-fade-in-up delay-100">
              <div className="contact-icon">🪷</div>
              <div>
                <h3 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  {t.home.feature1Title}
                </h3>
                <p style={{ color: 'var(--secondary)' }}>
                  {t.home.feature1Desc}
                </p>
              </div>
            </div>
            
            <div className="contact-info-card animate-fade-in-up delay-200">
              <div className="contact-icon">🏛️</div>
              <div>
                <h3 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  {t.home.feature2Title}
                </h3>
                <p style={{ color: 'var(--secondary)' }}>
                  {t.home.feature2Desc}
                </p>
              </div>
            </div>
            
            <div className="contact-info-card animate-fade-in-up delay-300">
              <div className="contact-icon">👑</div>
              <div>
                <h3 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  {t.home.feature3Title}
                </h3>
                <p style={{ color: 'var(--secondary)' }}>
                  {t.home.feature3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
