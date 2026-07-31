import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <div className="product-category" style={{ marginBottom: '1rem', display: 'inline-block' }}>Est. 1999</div>
            <h1 className="hero-title">Crafting Quality<br/>Binders & Books</h1>
            <p className="hero-subtitle">
              Premium notebook manufacturers in Solapur. Experience the finest paper quality and durable bindings for your professional and academic needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/shop" className="btn btn-primary">
                View Catalog
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in-up delay-100">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose Manjula?</h2>
            <p style={{ color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto' }}>
              We pride ourselves on delivering exceptional stationery products using premium grade materials.
            </p>
          </div>
          
          <div className="products-grid">
            <div className="contact-info-card animate-fade-in-up delay-200">
              <div className="contact-icon">✦</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Premium Quality</h3>
                <p style={{ color: 'var(--secondary)' }}>High GSM map and ledger paper for the best writing experience.</p>
              </div>
            </div>
            
            <div className="contact-info-card animate-fade-in-up delay-300">
              <div className="contact-icon">✦</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Durable Binding</h3>
                <p style={{ color: 'var(--secondary)' }}>Full red canvas, laminated marble, and premium board bindings.</p>
              </div>
            </div>
            
            <div className="contact-info-card animate-fade-in-up delay-300">
              <div className="contact-icon">✦</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Wide Variety</h3>
                <p style={{ color: 'var(--secondary)' }}>From sketch books to voucher files, we have everything you need.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
