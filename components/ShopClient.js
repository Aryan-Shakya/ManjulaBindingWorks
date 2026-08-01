"use client";

import { useState } from 'react';
import { useLanguage } from './LanguageContext';

export default function ShopClient({ products }) {
  const { t, lang } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWhatsAppOrder = (product) => {
    const message = `Hello Manjula Binding Works,\n\nI am interested in ordering/inquiring about the following product:\n\n*Product Name:* ${product.name}\n*Binding Type:* ${product.binding_type}\n*Paper Quality:* ${product.paper_quality}\n*Pages:* ${product.page_count}\n*Size:* ${product.size_display}${product.ruling ? `\n*Ruling/Printing:* ${product.ruling}` : ''}\n\nPlease provide more details on pricing and availability.`;
    
    const whatsappUrl = `https://wa.me/919850088537?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
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

        {/* Product Cards Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card animate-fade-in-up">
              <div 
                className="product-image-frame" 
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={product.image || '/images/hero_abstract.png'}
                  alt={product.name} 
                  className="product-image"
                />
              </div>
              
              <div className="product-info">
                <div className={lang === 'mr' ? 'product-category marathi-text' : 'product-category'}>
                  {product.binding_type ? product.binding_type.split(' ')[0] : 'Premium'} {t.shop.bindingPrefix}
                </div>
                <h3 
                  className="product-title"
                  onClick={() => setSelectedProduct(product)}
                  style={{ cursor: 'pointer' }}
                >
                  {product.name}
                </h3>
                
                <div className="product-desc">
                  <p style={{ marginBottom: '0.3rem' }}>
                    <strong>{t.shop.paperLabel}</strong> {product.paper_quality}
                  </p>
                  <p style={{ marginBottom: '0.3rem' }}>
                    <strong>{t.shop.sizeLabel}</strong> {product.size_display}
                  </p>
                  <p style={{ marginBottom: '0.3rem' }}>
                    <strong>{t.shop.pagesLabel}</strong> {product.page_count}
                  </p>
                  {product.ruling && (
                    <p>
                      <strong>{t.shop.rulingLabel}</strong> {product.ruling}
                    </p>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                  <button 
                    onClick={() => handleWhatsAppOrder(product)}
                    className="btn"
                    style={{ 
                      flex: 1, 
                      padding: '0.75rem', 
                      fontSize: '0.95rem',
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      color: '#FFF',
                      border: 'none'
                    }}
                  >
                    {t.shop.inquireBtn}
                  </button>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="btn btn-outline"
                    style={{ padding: '0.75rem 1rem', fontSize: '0.9rem' }}
                  >
                    {t.shop.viewDetailsBtn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div style={{
              background: 'var(--surface-card)',
              border: '2px solid var(--accent-gold)',
              borderRadius: '24px',
              maxWidth: '750px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2.5rem',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
            }}>
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--primary)',
                  color: '#FFF',
                  border: '1px solid var(--accent-gold)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    style={{ width: '100%', borderRadius: '16px', border: '1px solid var(--border-gold)' }}
                  />
                  {selectedProduct.additional_images && selectedProduct.additional_images.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                      {selectedProduct.additional_images.map((addImg, idx) => (
                        <img 
                          key={idx} 
                          src={addImg} 
                          alt="Additional view" 
                          style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--border-gold)' }} 
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <span className="product-category">{selectedProduct.binding_type}</span>
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1rem' }}>{selectedProduct.name}</h2>
                  
                  <div style={{ fontSize: '1rem', color: 'var(--secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    <p><strong>{t.shop.paperLabel}</strong> {selectedProduct.paper_quality}</p>
                    <p><strong>{t.shop.sizeLabel}</strong> {selectedProduct.size_display}</p>
                    <p><strong>{t.shop.pagesLabel}</strong> {selectedProduct.page_count}</p>
                    {selectedProduct.ruling && <p><strong>{t.shop.rulingLabel}</strong> {selectedProduct.ruling}</p>}
                  </div>

                  <button 
                    onClick={() => {
                      handleWhatsAppOrder(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="btn"
                    style={{ 
                      width: '100%', 
                      padding: '1rem', 
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      color: '#FFF',
                      border: 'none'
                    }}
                  >
                    💬 {t.shop.inquireBtn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
