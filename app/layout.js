import './globals.css';

export const metadata = {
  title: 'Manjula Binding Works | Premium Notebook Manufacturers',
  description: 'Manjula Binding Works in Solapur - Best Notebook Manufacturers offering premium sketch books, spring files, note pads, and duplication books.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar glass">
          <div className="container">
            <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logo.png" alt="Manjula Binding Works Logo" style={{ height: '45px', width: '45px' }} />
              <div>Manjula<span>Binding</span></div>
            </a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/shop">Shop</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>
        
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                  <img src="/logo.png" alt="Manjula Binding Works Logo" style={{ height: '40px', width: '40px', filter: 'brightness(0) invert(1)' }} />
                  <h3 style={{ margin: 0 }}>Manjula Binding Works</h3>
                </div>
                <p>146 A Karnik Nagar,<br/>Solapur, Maharashtra 413006<br/>India</p>
              </div>
              <div className="footer-col">
                <h3>Quick Links</h3>
                <a href="/">Home</a>
                <a href="/shop">Catalog</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
              </div>
              <div className="footer-col">
                <h3>Categories</h3>
                <a href="/shop">Sketch Books</a>
                <a href="/shop">Log Books</a>
                <a href="/shop">Duplicate Books</a>
                <a href="/shop">Spring Files</a>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} Manjula Binding Works. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
