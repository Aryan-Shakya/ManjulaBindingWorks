import './globals.css';

export const metadata = {
  title: 'मंजूळ बाइंडिंग वर्क्स | Manjula Binding Works Solapur',
  description: '1975 पासून सोलापूरमधील नामांकित बाइंडिंग आणि स्टेशनरी उत्पादक. दर्जेदार वह्या, लेजर बुक्स आणि कस्टम बाइंडिंग.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr">
      <body>
        <nav className="navbar glass">
          <div className="container">
            <a href="/" className="logo">
              <img 
                src="/logo.jpeg" 
                alt="मंजूळ बाइंडिंग वर्क्स लोगो" 
                style={{ 
                  height: '52px', 
                  width: '52px', 
                  borderRadius: '50%',
                  border: '2px solid var(--accent-gold)',
                  boxShadow: '0 4px 12px rgba(78, 0, 43, 0.15)'
                }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                <span className="marathi-text" style={{ fontSize: '1.6rem', color: 'var(--primary)', fontWeight: '700' }}>
                  मंजूळ <span style={{ color: 'var(--accent-red)' }}>बाइंडिंग</span>
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Works • Solapur
                </span>
              </div>
            </a>
            
            <div className="nav-links">
              <a href="/">मुखपृष्ठ (Home)</a>
              <a href="/shop">उत्पादने (Catalog)</a>
              <a href="/about">आमच्याबद्दल (About)</a>
              <a href="/contact">संपर्क (Contact)</a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                  <img 
                    src="/logo.jpeg" 
                    alt="मंजूळ बाइंडिंग वर्क्स" 
                    style={{ height: '48px', width: '48px', borderRadius: '50%', border: '1.5px solid var(--accent-gold)' }} 
                  />
                  <div>
                    <h3 className="marathi-text" style={{ margin: 0, fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
                      मंजूळ बाइंडिंग वर्क्स
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#D4AF37', margin: 0 }}>Est. 1975 • Solapur</p>
                  </div>
                </div>
                <p style={{ color: '#E2D9D2', lineHeight: '1.6' }}>
                  १४६ अ, कर्णिक नगर, सोलापूर, महाराष्ट्र ४१३००६<br />
                  उत्कृष्ट बाइंडिंग आणि स्टेशनरीचे विश्वासनीय नाव.
                </p>
              </div>

              <div className="footer-col">
                <h3>नेव्हिगेशन</h3>
                <a href="/">मुखपृष्ठ (Home)</a>
                <a href="/shop">उत्पादने (Catalog)</a>
                <a href="/about">आमच्याबद्दल (About Us)</a>
                <a href="/contact">संपर्क (Contact)</a>
              </div>

              <div className="footer-col">
                <h3>विशेष वैशिष्ट्ये</h3>
                <p>• प्रीमियम लेजर कागद</p>
                <p>• कॅनव्हास आणि मार्बल बाइंडिंग</p>
                <p>• कस्टम ऑफिस रजिस्टर</p>
                <p>• २ अत्याधुनिक कारखाने</p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} मंजूळ बाइंडिंग वर्क्स (Manjula Binding Works). सर्व हक्क सुरक्षित.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
