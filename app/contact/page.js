import ContactForm from '../../components/ContactForm';

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

          {/* Contact Form Client Component */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
