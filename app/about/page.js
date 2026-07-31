import fs from 'fs/promises';
import path from 'path';

export const metadata = {
  title: 'आमच्याबद्दल (About Us) | मंजूळ बाइंडिंग वर्क्स',
};

async function getFactoryImages() {
  try {
    const dirPath = path.join(process.cwd(), 'public', 'images', 'factory');
    const files = await fs.readdir(dirPath);
    return files.filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg')).map(f => `/images/factory/${f}`);
  } catch (e) {
    return [];
  }
}

export default async function About() {
  const images = await getFactoryImages();

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <span className="marathi-text" style={{ 
            color: 'var(--accent-saffron)', 
            fontSize: '1.1rem',
            background: 'var(--accent-gold-light)',
            padding: '0.4rem 1.2rem',
            borderRadius: '30px',
            border: '1px solid var(--border-gold)'
          }}>
            ✦ प्रेसच्या मागची कथा (Behind the Press)
          </span>
          
          <h1 className="marathi-text" style={{ fontSize: '3.5rem', marginTop: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            बाबुराव माने आणि कुटुंबाचा प्रेरणादायी प्रवास
          </h1>
          
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--accent-red)', lineHeight: '1.8' }}>
            "जिद्दीवर उभारलेले, आईच्या प्रेमाच्या आदरापोटी नाव दिलेले आणि पिढ्यानपिढ्या जतन केलेले जिवंत वारसा."
          </p>
        </div>

        {/* Snapshot Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          <div className="contact-info-card animate-fade-in-up delay-100" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className="marathi-text" style={{ color: 'var(--accent-saffron)', fontSize: '1.2rem' }}>संस्थापक (Founder)</h3>
            <p><strong>बाबुराव माने (Baburao Mane)</strong></p>
          </div>
          <div className="contact-info-card animate-fade-in-up delay-200" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className="marathi-text" style={{ color: 'var(--accent-saffron)', fontSize: '1.2rem' }}>स्थापना (Established)</h3>
            <p><strong>१९७५ (1975)</strong></p>
          </div>
          <div className="contact-info-card animate-fade-in-up delay-300" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className="marathi-text" style={{ color: 'var(--accent-saffron)', fontSize: '1.2rem' }}>विस्तार (Growth)</h3>
            <p>१ लहान खोलीपासून ते २ अत्याधुनिक कारखान्यांपर्यंत मजल.</p>
          </div>
          <div className="contact-info-card animate-fade-in-up delay-300" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className="marathi-text" style={{ color: 'var(--accent-saffron)', fontSize: '1.2rem' }}>प्रेरणा (Inspiration)</h3>
            <p>मातोश्री मंजूळाबाई माने यांच्या त्यागाचे व विश्वासाचे प्रतीक.</p>
          </div>
        </div>

        {/* The Journey Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '920px', margin: '0 auto 6rem auto' }}>
          
          <section className="animate-fade-in-up">
            <h2 className="marathi-text" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              १. नम्र सुरुवात आणि ध्येयाची ठिणगी
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              १९७५ मध्ये, बिकट आर्थिक परिस्थितीचा सामना करत असताना, तरुण बाबुराव माने यांना आपल्या कुटुंबासाठी चांगले भविष्य घडवण्याची तीव्र जिद्द निर्माण झाली. वडील मारुती माने गिरणीत कष्ट करत होते आणि आई मंजूळाबाई मुलांच्या आधारासाठी अतिरिक्त काम करत होत्या. पालकांचा हा संघर्ष बाबुरावांसाठी सर्वात मोठी प्रेरणा ठरला.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
              १० वी पूर्ण केल्यावर त्यांनी लगेचच स्थानिक बाइंडिंग कार्यशाळांमध्ये काम करण्यास सुरुवात केली. कागद, धागा आणि चामड्यासोबत काम करताना केवळ मजुरीच मिळाली नाही, तर एका महान कलेची आवड निर्माण झाली.
            </p>
          </section>

          <section className="animate-fade-in-up">
            <h2 className="marathi-text" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              २. आईचा विश्वास आणि पहिली लहान कार्यशाळा
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
              बाबुरावांनी शासकीय कार्यालयांचे बाइंडिंग कंत्राट घेण्याचे धाडस केले. मुलाचा निश्चय पाहून आई मंजूळाबाईंनी आपली कष्टाची पुंजी देऊन स्वतःच्या घरात एका खोलीत व्यवसाय सुरू करण्यास पाठिंबा दिला. <strong>त्यांच्या त्यागाचा आणि विश्वासाचा सन्मान म्हणून व्यवसायाला 'मंजूळ' हे नाव देण्यात आले.</strong>
            </p>
          </section>

          <section className="animate-fade-in-up" style={{ 
            padding: '3rem', 
            background: 'var(--surface-card)', 
            borderRadius: '24px', 
            border: '1px solid var(--border-gold)',
            boxShadow: '0 10px 30px rgba(78,0,43,0.05)'
          }}>
            <h2 className="marathi-text" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              ३. संस्थापक विचार: "प्रत्येक कर्मचारी म्हणजेच कुटुंब"
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              आजही इतका मोठा विस्तार झाल्यावरही, बाबुराव माने कारखान्यात कर्मचाऱ्यांसोबत बसून त्याच नम्रतेने आणि निष्ठेने काम करतात जे त्यांनी १९७५ मध्ये सुरू केले होते.
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--accent-red)', fontStyle: 'italic', fontWeight: '600' }}>
              "वाजवी दर, गुणवत्तेशी तडजोड नाही आणि प्रत्येक ग्राहक व कर्मचाऱ्याला कुटुंबासारखे वागवणे."
            </p>
          </section>

          <section className="animate-fade-in-up" style={{ 
            padding: '3rem', 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', 
            color: '#FFF', 
            borderRadius: '24px',
            border: '2px solid var(--accent-gold)'
          }}>
            <h2 className="marathi-text" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>
              आजची आमची दृष्टी (The Vision Today)
            </h2>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.15rem', color: '#E2D9D2', lineHeight: '2' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--accent-gold)' }}>• कलेचे जतन:</strong> पारंपारिक हस्तकला आणि आधुनिक उत्पादन क्षमतेचा मेळ.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--accent-gold)' }}>• रोजगार आणि समाज:</strong> कारागिरांना सन्मानजनक रोजगार देणे.
              </li>
              <li>
                <strong style={{ color: 'var(--accent-gold)' }}>• पिढ्यानपिढ्यांचा विश्वास:</strong> ग्राहकांशी आयुष्यभराचे नाते जपणे.
              </li>
            </ul>
          </section>
        </div>

        {/* Factory Images Gallery (Arch Frames) */}
        {images.length > 0 && (
          <div className="animate-fade-in-up" style={{ marginTop: '6rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 className="marathi-text" style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                आमचा कारखाना (Inside Our Factory)
              </h2>
              <p style={{ color: 'var(--secondary)', fontSize: '1.1rem' }}>
                जिथे परंपरा आणि तंत्रज्ञान एकत्र येते. आमच्या कारखान्याची काही दृश्ये.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1.5rem'
            }}>
              {images.map((imgSrc, idx) => (
                <div key={idx} style={{ 
                  borderRadius: '120px 120px 16px 16px', /* Arch dome shape for factory photos */
                  overflow: 'hidden', 
                  border: '1.5px solid var(--border-gold)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                  height: '300px'
                }}>
                  <img 
                    src={imgSrc} 
                    alt={`कारखाना छायाचित्र ${idx + 1}`} 
                    className="factory-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} 
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
