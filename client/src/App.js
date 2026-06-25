import { useEffect, useState } from 'react';
import './App.css';

const carouselData = [
  {
    title: 'Urban Shield',
    description: 'Elegant metallic shell with reinforced edges.',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    style: 'bag-card-1',
  },
  {
    title: 'Voyager Pro',
    description: 'Sleek navy carry-on built for tech-savvy travelers.',
    imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80',
    style: 'bag-card-2',
  },
  {
    title: 'Jetset Carrier',
    description: 'Premium travel case with modular compartments and bold style.',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    style: 'bag-card-3',
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Checking backend status...');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => setStatusMessage(data.message))
      .catch(() => setStatusMessage('Backend unavailable. Start the server to connect.'));
  }, []);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      window.alert(data.message || 'Message sent successfully.');
      form.reset();
    } catch (error) {
      window.alert('Unable to send message. Please try again later.');
    }
  };

  return (
    <div className="app-shell">
      <header className="page-header">
        <div className="top-bar">
          <div className="brand">
            <span className="brand-mark">TTB</span>
            <div>
              <strong>Tech Travel Bag</strong>
              <p>Smart luggage for modern journeys</p>
            </div>
          </div>
          <nav className="site-nav">
            <a href="#home">Home</a>
            <a href="#explore">Explore</a>
            <a href="#blogs">Blogs</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Luxury Tech Travel</span>
            <h1>Carry the future with a sleek metallic travel bag.</h1>
            <p>Secure, smart, and stylish luggage designed for the modern explorer. Explore premium features, travel-ready organization, and bold design in navy and silver.</p>
            <div className="hero-actions">
              <a href="#explore" className="btn btn-primary">Explore Now</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
          <div className="carousel-panel">
            <div className="carousel" aria-label="Tech travel bag image carousel">
              <div className="carousel-track">
                {carouselData.map((slide, index) => (
                  <article key={slide.title} className={`carousel-item ${index === activeSlide ? 'active' : ''}`}>
                    <div
                      className={`bag-card ${slide.style}`}
                      style={{
                        backgroundImage: `url(${slide.imageUrl}), linear-gradient(135deg, rgba(12,35,62,0.55), rgba(69,106,146,0.45))`,
                      }}
                    >
                      <div className="bag-label">{slide.title}</div>
                    </div>
                    <p>{slide.description}</p>
                  </article>
                ))}
              </div>
              <div className="carousel-controls">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-btn ${index === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="explore" className="section explore-section">
          <div className="section-header">
            <span>Explore</span>
            <h2>Experience motion, depth, and bold design.</h2>
          </div>
          <div className="explore-grid">
            <div className="scene-panel">
              <div className="disc-scene" aria-hidden="true">
                <div className="disc-wrap">
                  <div className="disc">
                    <div className="disc-ring disc-ring-1" />
                    <div className="disc-ring disc-ring-2" />
                    <div className="disc-ring disc-ring-3" />
                  </div>
                </div>
              </div>
              <p>Our twisting disc animation gives the Explore section a sharp tech-meets-motion look.</p>
            </div>
            <div className="explore-copy">
              <h3>Innovative travel solutions built for every journey.</h3>
              <p>From airport terminals to co-working lounges, the Tech Travel Bag blends metallic design, navy blue accents, and intelligent functionality.</p>
              <ul>
                <li>Adaptive storage compartments</li>
                <li>Integrated power access</li>
                <li>Impact-resistant outer shell</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="blogs" className="section card-section">
          <div className="section-header">
            <span>Blogs</span>
            <h2>Latest stories from the travel tech frontier.</h2>
          </div>
          <div className="cards-row">
            <article className="info-card">
              <h3>Packing Smarter</h3>
              <p>Discover how modular tech compartments make airport security and daily travel effortless.</p>
            </article>
            <article className="info-card">
              <h3>Power on the Move</h3>
              <p>Explore our integrated charging solutions designed for remote work and long transit days.</p>
            </article>
            <article className="info-card">
              <h3>Durability Meets Design</h3>
              <p>Learn why metallic surfaces and reinforced frames are essential for modern travel.</p>
            </article>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-header">
            <span>Services</span>
            <h2>Personalized travel gear support with premium service.</h2>
          </div>
          <div className="services-list">
            <article className="service-card">
              <h3>Custom Carry Solutions</h3>
              <p>Tailored bag fittings, modular inserts, and organization upgrades for every itinerary.</p>
            </article>
            <article className="service-card">
              <h3>Rapid Delivery</h3>
              <p>Fast shipping, premium packaging, and white-glove support for urgent trips.</p>
            </article>
            <article className="service-card">
              <h3>Tech Integration</h3>
              <p>Expert setup for smart accessories, power banks, and portable workstations.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel">
            <div>
              <span>Contact</span>
              <h2>Ready to upgrade your travel experience?</h2>
              <p>Send us a message and our travel gear specialists will reply within one business day.</p>
              <div className="contact-info">
                <p><strong>Email:</strong> hello@techtravelbag.com</p>
                <p><strong>Phone:</strong> +1 (800) 555-TRVL</p>
                <p className="status-message">{statusMessage}</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="Your email" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="How can we help?" required />
              </label>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <p>© 2026 Tech Travel Bag. Designed for smart journeys.</p>
      </footer>
    </div>
  );
}

export default App;
