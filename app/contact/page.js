export const metadata = {
  title: 'संपर्क (Contact Us) | मंजूळ बाइंडिंग वर्क्स',
};

export default function Contact() {
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
            ✦ संपर्क साधा (Get In Touch)
          </span>
          <h1 className="marathi-text" style={{ fontSize: '3.2rem', margin: '1rem 0 0.5rem 0', color: 'var(--primary)' }}>
            आमच्याशी संपर्क साधा
          </h1>
          <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            बाइंडिंग ऑर्डर्स, घाऊक खरेदी (Bulk Orders) किंवा कस्टमाइज्ड स्टेशनरीसाठी आजच संपर्क करा.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="animate-fade-in-up">
            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <div>
                <h3 className="marathi-text" style={{ fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                  कारखान्याचा पत्ता (Address)
                </h3>
                <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
                  १४६ अ, कर्णिक नगर, दत्ता मंदिरा जवळ, <br />
                  WIT कॉलेज मागे, सोलापूर, महाराष्ट्र ४१३००६
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">📞</div>
              <div>
                <h3 className="marathi-text" style={{ fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                  फोन आणि व्हॉट्सॲप (Phone / WhatsApp)
                </h3>
                <p style={{ color: 'var(--secondary)' }}>
                  संपर्क: +91 9999PX217X <br />
                  (ऑर्डर चौकशीसाठी उपलब्ध)
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">🗺️</div>
              <div>
                <h3 className="marathi-text" style={{ fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                  गूगल मॅप्स (Google Location)
                </h3>
                <a 
                  href="https://maps.app.goo.gl/bDvL6WbX9Nko9zTLA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: '0.5rem', display: 'inline-flex' }}
                >
                  मॅपवर स्थान पहा (Open in Google Maps) ↗
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-200" style={{ 
            background: 'var(--surface-card)', 
            padding: '3rem', 
            borderRadius: '24px', 
            border: '1px solid var(--border-gold)',
            boxShadow: '0 10px 30px rgba(78, 0, 43, 0.05)'
          }}>
            <h2 className="marathi-text" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              संदेश पाठवा (Send Message)
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label marathi-text">तुमचे नाव (Full Name)</label>
                <input type="text" className="form-control" placeholder="उदा. राहुल माने" required />
              </div>
              
              <div className="form-group">
                <label className="form-label marathi-text">मोबाइल नंबर (Mobile Number)</label>
                <input type="tel" className="form-control" placeholder="+91 9876543210" required />
              </div>
              
              <div className="form-group">
                <label className="form-label marathi-text">विषय / उत्पादनाचा प्रकार (Subject)</label>
                <input type="text" className="form-control" placeholder="उदा. लेजर बुक ऑर्डर चौकशी" required />
              </div>
              
              <div className="form-group">
                <label className="form-label marathi-text">तुमचा संदेश (Message)</label>
                <textarea className="form-control" rows="4" placeholder="ऑर्डरबद्दल अधिक माहिती इथे लिहा..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                संदेश पाठवा (Send Message) →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
