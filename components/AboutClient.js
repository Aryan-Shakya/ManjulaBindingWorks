"use client";

import { useLanguage } from './LanguageContext';

export default function AboutClient({ images }) {
  const { t, lang } = useLanguage();

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <span className={lang === 'mr' ? 'marathi-text' : ''} style={{ 
            color: 'var(--accent-saffron)', 
            fontSize: '1.05rem',
            background: 'var(--accent-gold-light)',
            padding: '0.4rem 1.2rem',
            borderRadius: '30px',
            border: '1px solid var(--border-gold)',
            display: 'inline-block'
          }}>
            {t.about.tag}
          </span>
          
          <h1 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '3.2rem', marginTop: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            {t.about.mainTitle}
          </h1>
          
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--accent-red)', lineHeight: '1.8' }}>
            {t.about.subtitle}
          </p>
        </div>

        {/* Snapshot Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          <div className="contact-info-card animate-fade-in-up delay-100" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className={lang === 'mr' ? 'marathi-text' : ''} style={{ color: 'var(--accent-saffron)', fontSize: '1.2rem' }}>{t.about.founder}</h3>
            <p><strong>Baburao Mane</strong></p>
          </div>
          <div className="contact-info-card animate-fade-in-up delay-200" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className={lang === 'mr' ? 'marathi-text' : ''} style={{ color: 'var(--accent-saffron)', fontSize: '1.2rem' }}>{t.about.established}</h3>
            <p><strong>1975 ({t.home.badge1975})</strong></p>
          </div>
          <div className="contact-info-card animate-fade-in-up delay-300" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className={lang === 'mr' ? 'marathi-text' : ''} style={{ color: 'var(--accent-saffron)', fontSize: '1.2rem' }}>{t.about.growth}</h3>
            <p>{t.about.growthDesc}</p>
          </div>
          <div className="contact-info-card animate-fade-in-up delay-300" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className={lang === 'mr' ? 'marathi-text' : ''} style={{ color: 'var(--accent-saffron)', fontSize: '1.2rem' }}>{t.about.inspiration}</h3>
            <p>{t.about.inspirationDesc}</p>
          </div>
        </div>

        {/* The Journey Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '920px', margin: '0 auto 6rem auto' }}>
          
          <section className="animate-fade-in-up">
            <h2 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              {t.about.story1Title}
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              {t.about.story1Desc1}
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
              {t.about.story1Desc2}
            </p>
          </section>

          <section className="animate-fade-in-up">
            <h2 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              {t.about.story2Title}
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
              {t.about.story2Desc}
            </p>
          </section>

          <section className="animate-fade-in-up" style={{ 
            padding: '3rem', 
            background: 'var(--surface-card)', 
            borderRadius: '24px', 
            border: '1px solid var(--border-gold)',
            boxShadow: '0 10px 30px rgba(78,0,43,0.05)'
          }}>
            <h2 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              {t.about.story3Title}
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              {t.about.story3Desc}
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--accent-red)', fontStyle: 'italic', fontWeight: '600' }}>
              {t.about.philosophyQuote}
            </p>
          </section>

          <section className="animate-fade-in-up" style={{ 
            padding: '3rem', 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', 
            color: '#FFF', 
            borderRadius: '24px',
            border: '2px solid var(--accent-gold)'
          }}>
            <h2 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>
              {t.about.visionTitle}
            </h2>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.15rem', color: '#E2D9D2', lineHeight: '2' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--accent-gold)' }}>{t.about.vision1}</strong>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--accent-gold)' }}>{t.about.vision2}</strong>
              </li>
              <li>
                <strong style={{ color: 'var(--accent-gold)' }}>{t.about.vision3}</strong>
              </li>
            </ul>
          </section>
        </div>

        {/* Factory Images Gallery */}
        {images && images.length > 0 && (
          <div className="animate-fade-in-up" style={{ marginTop: '6rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                {t.about.factoryTitle}
              </h2>
              <p style={{ color: 'var(--secondary)', fontSize: '1.1rem' }}>
                {t.about.factorySub}
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1.5rem'
            }}>
              {images.map((imgSrc, idx) => (
                <div key={idx} style={{ 
                  borderRadius: '120px 120px 16px 16px',
                  overflow: 'hidden', 
                  border: '1.5px solid var(--border-gold)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                  height: '300px'
                }}>
                  <img 
                    src={imgSrc} 
                    alt={`Factory photo ${idx + 1}`} 
                    className="factory-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} 
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
