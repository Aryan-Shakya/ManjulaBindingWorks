import fs from 'fs/promises';
import path from 'path';

export const metadata = {
  title: 'Our Story | Manjula Binding Works',
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
    <div style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Behind the Press</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '400', color: 'var(--secondary)' }}>The Story of Baburao Mane & Family</h2>
          <p style={{ fontSize: '1.2rem', marginTop: '2rem', fontStyle: 'italic', color: 'var(--accent)' }}>
            "Built on resilience, named in honor of a mother's love, and passed down as a living legacy across generations."
          </p>
        </div>

        {/* Snapshot Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          <div className="contact-info-card animate-fade-in-up delay-100" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ color: 'var(--accent)' }}>Founder</h3>
            <p><strong>Baburao Mane</strong></p>
          </div>
          <div className="contact-info-card animate-fade-in-up delay-200" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ color: 'var(--accent)' }}>Established</h3>
            <p><strong>1975</strong></p>
          </div>
          <div className="contact-info-card animate-fade-in-up delay-300" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ color: 'var(--accent)' }}>Growth</h3>
            <p>Expanded from 1 home workshop to 2 full-fledged operational factories.</p>
          </div>
          <div className="contact-info-card animate-fade-in-up delay-300" style={{ flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ color: 'var(--accent)' }}>Inspiration</h3>
            <p>Named after his mother, Manjulabai Mane, who provided the initial financial & moral support.</p>
          </div>
        </div>

        {/* The Journey Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '900px', margin: '0 auto 6rem auto' }}>
          
          <section className="animate-fade-in-up">
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>From Humble Beginnings to a Burning Spark</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              In 1975, facing severe economic hardships, young Baburao Mane knew he had to build a better future for his family. His father, Maruti Mane, worked tirelessly in a mill, while his mother, Manjulabai Mane, took on extra work just to support the children. Seeing his parents' struggle became the ultimate driving force for Baburao.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
              Immediately after completing his 10th standard, he stepped into the working world, taking up jobs at local binding workshops to earn a living. Working hands-on with paper, thread, and leather didn't just earn him a wage—it sparked a lifelong passion. Seeing the beauty of a well-bound book, he realized he wanted to build something of his own.
            </p>
          </section>

          <section className="animate-fade-in-up">
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>A Mother's Faith & The First Room Workshop</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
              Taking the ultimate leap of faith, Baburao began taking contract binding work for government offices. Recognizing his determination, his mother, Manjulabai, gave him her hard-earned savings and unwavering moral support to launch his own small enterprise right from a single room at home. <strong>In honor of her sacrifice, belief, and foundational support, the business was proudly named after her.</strong>
            </p>
          </section>

          <section className="animate-fade-in-up">
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Overcoming the Odds & Expanding the Horizon</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              Turning a tiny home setup into a thriving enterprise was no smooth ride. In the early days, Baburao faced immense challenges:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              <li><strong>Building Skill from Scratch:</strong> Training local workers in the complex, meticulous techniques required for fine binding.</li>
              <li><strong>Standing Out:</strong> Competing against established brands in the market and proving that local craftsmanship could match top-tier quality.</li>
              <li><strong>Uncompromising Trust:</strong> Earning every single customer's confidence through absolute honesty, fair pricing, and reliable service.</li>
            </ul>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)' }}>
              Through sheer grit and dedication, that single-room workshop didn't just become one factory—it has grown into two full-fledged, state-of-the-art factories serving a widespread, loyal clientele.
            </p>
          </section>

          <section className="animate-fade-in-up" style={{ padding: '3rem', background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Founder’s Heart: Leading by Example</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              Even today, despite all the growth and success, Baburao Mane still sits alongside his workers on the factory floor, working with the exact same passion, humility, and dedication as he did back in 1975.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', fontStyle: 'italic' }}>
              "Affordable excellence, humility at work, and treating every employee and client like family."
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginTop: '1.5rem' }}>
              He doesn't view his team as employees; he treats every worker like a member of his own extended family. His presence on the floor serves as a constant reminder that true craftsmanship comes from staying grounded, humble, and deeply connected to the work.
            </p>
          </section>

          <section className="animate-fade-in-up">
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>A Living Legacy: Carrying the Torch</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              What began as a one-man dream for survival is now a proud multi-generational legacy.
            </p>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.125rem', color: 'var(--secondary)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <strong>The Sons:</strong> Taking up the mantle, his sons are active in daily operations, bringing modern insights and strategies to adapt the business through changing market times while preserving its core traditional craft.
              </li>
              <li style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <strong>The Daughters-in-law:</strong> Actively contributing to supporting, managing, and developing the growing enterprise.
              </li>
              <li>
                <strong>The Grandchildren:</strong> The third generation is already growing up around the scent of fresh paper and binding ink, developing a natural interest in continuing the family tradition.
              </li>
            </ul>
          </section>

          <section className="animate-fade-in-up" style={{ padding: '3rem', background: 'var(--primary)', color: 'white', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>The Vision Today</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.125rem', color: '#EAECF0', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'white' }}>Preserving Craftsmanship:</strong> Blending traditional binding artistry with modern production capacity.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'white' }}>Community & Employment:</strong> Providing stable, meaningful employment and treating craftsmen like family.
              </li>
              <li>
                <strong style={{ color: 'white' }}>Generational Trust:</strong> Building bonds with clients that last as long as the books we bind.
              </li>
            </ul>
          </section>
        </div>

        {/* Factory Images Gallery */}
        {images.length > 0 && (
          <div className="animate-fade-in-up" style={{ marginTop: '6rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Inside Our Factory</h2>
              <p style={{ color: 'var(--secondary)', fontSize: '1.125rem' }}>Where tradition meets precision. Take a glimpse behind the press.</p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
              gap: '1rem',
              gridAutoRows: '250px'
            }}>
              {images.map((imgSrc, idx) => (
                <div key={idx} style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  border: '1px solid var(--border)',
                  gridRowEnd: idx % 3 === 0 ? 'span 2' : 'span 1' // Simple masonry effect
                }}>
                  <img 
                    src={imgSrc} 
                    alt={`Factory Image ${idx + 1}`} 
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
