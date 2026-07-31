import fs from 'fs/promises';
import path from 'path';

export const metadata = {
  title: 'Catalog | Manjula Binding Works',
};

async function getProducts() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export default async function Shop() {
  const products = await getProducts();

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Our Catalog</h1>
        <p style={{ textAlign: 'center', color: 'var(--secondary)', marginBottom: '4rem', fontSize: '1.125rem' }}>
          Explore our premium range of notebooks, log books, and stationery files.
        </p>

        <div className="products-grid">
          {products.map((product, index) => {
            // Rough mapping: product index 0 -> 2.jpeg
            const imageIndex = index + 2;
            const fallbackImage = 'https://via.placeholder.com/400x300?text=No+Image';
            
            return (
              <div key={index} className="product-card animate-fade-in-up" style={{ animationDelay: `${(index % 4) * 100}ms` }}>
                <img 
                  src={`/images/products/${imageIndex}.jpeg`}
                  alt={product["Product Name / Description"]} 
                  className="product-image"
                />
                <div className="product-info">
                  <div className="product-category">{product["Binding Type"]?.split(' ')[0] || 'Premium'} Binding</div>
                  <h3 className="product-title">{product["Product Name / Description"]}</h3>
                  <div className="product-desc">
                    <p style={{ marginBottom: '0.5rem' }}><strong>Paper:</strong> {product["Paper Quality"]}</p>
                    <p style={{ marginBottom: '0.5rem' }}><strong>Size:</strong> {product["Size Format / Dimensions"]}</p>
                    <p><strong>Pages:</strong> {product["Available Page Formats"]}</p>
                  </div>
                  <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>Inquire Now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
