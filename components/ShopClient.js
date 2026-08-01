"use client";

import { useLanguage } from './LanguageContext';

export default function ShopClient({ products }) {
  const { t, lang } = useLanguage();

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className={lang === 'mr' ? 'marathi-text' : ''} style={{ 
            color: 'var(--accent-saffron)', 
            fontSize: '1.05rem',
            background: 'var(--accent-gold-light)',
            padding: '0.4rem 1.2rem',
            borderRadius: '30px',
            border: '1px solid var(--border-gold)',
            display: 'inline-block'
          }}>
            {t.shop.tag}
          </span>
          <h1 className={lang === 'mr' ? 'marathi-text' : ''} style={{ fontSize: '3.2rem', margin: '1rem 0 0.5rem 0', color: 'var(--primary)' }}>
            {t.shop.title}
          </h1>
          <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            {t.shop.subtitle}
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => {
            const imageIndex = index + 2;
            
            return (
              <div key={index} className="product-card animate-fade-in-up" style={{ animationDelay: `${(index % 4) * 80}ms` }}>
                <div className="product-image-frame">
                  <img 
                    src={`/images/products/${imageIndex}.jpeg`}
                    alt={product["Product Name / Description"]} 
                    className="product-image"
                  />
                </div>
                
                <div className="product-info">
                  <div className={lang === 'mr' ? 'product-category marathi-text' : 'product-category'}>
                    {product["Binding Type"]?.split(' ')[0] || 'Premium'} {t.shop.bindingPrefix}
                  </div>
                  <h3 className="product-title">{product["Product Name / Description"]}</h3>
                  <div className="product-desc">
                    <p style={{ marginBottom: '0.4rem' }}><strong>{t.shop.paperLabel}</strong> {product["Paper Quality"]}</p>
                    <p style={{ marginBottom: '0.4rem' }}><strong>{t.shop.sizeLabel}</strong> {product["Size Format / Dimensions"]}</p>
                    <p><strong>{t.shop.pagesLabel}</strong> {product["Available Page Formats"]}</p>
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    {t.shop.inquireBtn}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
