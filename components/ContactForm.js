"use client";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे! आम्ही लवकरच तुमच्याशी संपर्क साधू.');
  };

  return (
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
      <form onSubmit={handleSubmit}>
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
  );
}
