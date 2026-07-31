export const metadata = {
  title: 'About | Manjula Binding Works',
};

export default function About() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Us</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              <strong>Manjul Binding Works</strong> has been a trusted name in Solapur for decades, specializing in premium notebook manufacturing, professional book binding, and high-quality stationery supplies.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              We cater to schools, colleges, offices, and businesses with a wide variety of products ranging from standard sketch books and spring files to complex ledger logs and duplicate books.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
              Our commitment to using top-tier materials like 80 GSM ledger paper and full red canvas binding ensures that every product we deliver is built to last.
            </p>
          </div>
          
          <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Our Expertise</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <strong>Educational Materials</strong>
                <div style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>Drawing books, Sketch pads, and A4 Notebooks</div>
              </li>
              <li style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <strong>Office Supplies</strong>
                <div style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>Spring Files, Voucher Books, and Duplicate Books</div>
              </li>
              <li>
                <strong>Accounting Ledgers</strong>
                <div style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>Jama Nave logs and full-size ledger books with premium binding</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
