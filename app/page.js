import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Abstract Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fade-in-up">
              <div className="marathi-text" style={{ 
                fontSize: '1.1rem', 
                color: 'var(--accent-saffron)', 
                marginBottom: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--accent-gold-light)',
                padding: '0.4rem 1rem',
                borderRadius: '30px',
                border: '1px solid var(--border-gold)'
              }}>
                ✦ ५० वर्षांची परंपरा आणि विश्वास (Est. 1975)
              </div>
              
              <h1 className="hero-title">
                परंपरा आणि गुणवत्तेचे <br />
                <span style={{ color: 'var(--accent-red)' }}>उत्कृष्ट बाइंडिंग</span>
              </h1>
              
              <p className="hero-subtitle">
                सोलापूरमधील नामांकित वह्या, लेजर बुक्स आणि कस्टम बाइंडिंग उत्पादक. पारंपारिक कला आणि आधुनिक तंत्रज्ञानाचा सुरेख संगम.
              </p>
              
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link href="/shop" className="btn btn-primary">
                  उत्पादने पहा (View Catalog) →
                </Link>
                <Link href="/about" className="btn btn-outline">
                  आमचा प्रवास (Our Story)
                </Link>
              </div>
            </div>

            <div className="hero-image-container animate-fade-in-up delay-200">
              <div className="hero-arch-wrapper">
                <img 
                  src="/images/hero_abstract.png" 
                  alt="मंजूळ बाइंडिंग क्राफ्ट" 
                  className="hero-arch-img" 
                />
                <div className="floating-motif">
                  <span className="marathi-text" style={{ fontSize: '1rem', fontWeight: '700' }}>१९७५</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in-up">
            <h2 className="marathi-text" style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              मंजूळ बाइंडिंगच का निवडावे?
            </h2>
            <p style={{ color: 'var(--secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
              आम्ही केवळ पुस्तके बाइंड करत नाही, तर तुमच्या महत्त्वाच्या कागदपत्रांना टिकाऊपणा आणि सौंदर्य प्रदान करतो.
            </p>
          </div>
          
          <div className="products-grid">
            <div className="contact-info-card animate-fade-in-up delay-100">
              <div className="contact-icon">🪷</div>
              <div>
                <h3 className="marathi-text" style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  उच्च दर्जाचा कागद (Premium Paper)
                </h3>
                <p style={{ color: 'var(--secondary)' }}>
                  ८०+ GSM मॅपलिथो आणि लेजर कागदाचा वापर, ज्यामुळे लिहिण्याचा अनुभव अत्यंत सुलभ होतो.
                </p>
              </div>
            </div>
            
            <div className="contact-info-card animate-fade-in-up delay-200">
              <div className="contact-icon">🏛️</div>
              <div>
                <h3 className="marathi-text" style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  मजबूत बाइंडिंग (Durable Craft)
                </h3>
                <p style={{ color: 'var(--secondary)' }}>
                  फुल रेड कॅनव्हास, लॅमिनेटेड मार्बल आणि रेझिन बोर्ड बाइंडिंग जे वर्षानुवर्षे टिकते.
                </p>
              </div>
            </div>
            
            <div className="contact-info-card animate-fade-in-up delay-300">
              <div className="contact-icon">👑</div>
              <div>
                <h3 className="marathi-text" style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  विविध प्रकार (Wide Variety)
                </h3>
                <p style={{ color: 'var(--secondary)' }}>
                  शालेय वह्यांपासून ते व्यापारी लेजर, व्हाउचर फाइल्स आणि ड्रॉइंग बुक्सपर्यंत सर्वकाही एकाच छताखाली.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
