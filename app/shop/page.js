import fs from 'fs/promises';
import path from 'path';

export const metadata = {
  title: 'उत्पादने (Catalog) | मंजूळ बाइंडिंग वर्क्स',
};

async function getProducts() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export default async function Shop() {
  const products = await getProducts();

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="marathi-text" style={{ 
            color: 'var(--accent-saffron)', 
            fontSize: '1.1rem',
            background: 'var(--accent-gold-light)',
            padding: '0.4rem 1.2rem',
            borderRadius: '30px',
            border: '1px solid var(--border-gold)'
          }}>
            ✦ आमची संपूर्ण उत्पादने (Catalog)
          </span>
          <h1 className="marathi-title" style={{ fontSize: '3.2rem', margin: '1rem 0 0.5rem 0', color: 'var(--primary)' }}>
            दर्जेदार वह्या आणि बाइंडिंग उत्पादने
          </h1>
          <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            व्यापारी लेजर, शालेय नोटबुक्स आणि कस्टमाइज्ड फाइल्सचे समृद्ध भांडार.
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
                  <div className="product-category">
                    {product["Binding Type"]?.split(' ')[0] || 'प्रीमियम'} बाइंडिंग
                  </div>
                  <h3 className="product-title">{product["Product Name / Description"]}</h3>
                  <div className="product-desc">
                    <p style={{ marginBottom: '0.4rem' }}><strong>कागद (Paper):</strong> {product["Paper Quality"]}</p>
                    <p style={{ marginBottom: '0.4rem' }}><strong>आकार (Size):</strong> {product["Size Format / Dimensions"]}</p>
                    <p><strong>पाने (Pages):</strong> {product["Available Page Formats"]}</p>
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    चौकशी करा (Inquire Now)
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
