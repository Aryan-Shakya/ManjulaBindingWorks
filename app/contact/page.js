export const metadata = {
  title: 'Contact | Manjula Binding Works',
};

export default function Contact() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Get in Touch</h1>
        
        <div className="contact-grid">
          <div>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '3rem' }}>
              We'd love to hear from you! Whether you need custom binding for a bulk order or want to inquire about our stock, reach out to us.
            </p>
            
            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Visit Us</h3>
                <p style={{ color: 'var(--secondary)' }}>
                  146 A Karnik Nagar,<br/>
                  Near Datta Mandir, Bh Wit Collage,<br/>
                  Solapur Midc, Solapur, Maharashtra 413006
                </p>
              </div>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-icon">🕒</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Business Hours</h3>
                <p style={{ color: 'var(--secondary)' }}>
                  Monday - Saturday: 9:00 AM - 8:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ background: 'var(--surface)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '2rem' }}>Send a Message</h3>
            <form>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}      
