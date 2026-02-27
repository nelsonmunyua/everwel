import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: 'shield',
      text: 'Licensed & Bonded Caregivers'
    },
    {
      icon: 'users',
      text: 'Flexible Scheduling Options'
    },
    {
      icon: 'heart',
      text: 'Compassionate, Professional Care'
    },
    {
      icon: 'map',
      text: 'Serving Washington State Communities'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Personalized Care Plans',
      description: 'Customized services designed around your unique needs and lifestyle preferences.'
    },
    {
      title: 'Licensed Professionals',
      description: 'All caregivers are background-checked, trained, and licensed in Washington State.'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Hourly, daily, overnight, or live-in care options to fit your schedule.'
    },
    {
      title: 'Family Support',
      description: 'We work closely with families to ensure the best possible care outcomes.'
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock support and emergency assistance when you need it.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Everwel Home Care</h1>
          <p className="hero-subtitle">Professional In-Home Care Services in Washington State</p>
          <p className="hero-description">
            Compassionate, reliable support that enables you to maintain independence, 
            dignity, and comfort in your own home. Our licensed caregivers provide 
            personalized assistance tailored to your unique needs.
          </p>
          <div className="hero-features">
            {features.map((feature, index) => (
              <div key={index} className="hero-feature">
                <div className="feature-icon">
                  {feature.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  )}
                  {feature.icon === 'users' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  )}
                  {feature.icon === 'heart' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  )}
                  {feature.icon === 'map' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  )}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-accent btn-large">Request Care Assessment</Link>
            <Link to="/contact" className="btn btn-outline-light btn-large">Schedule Consultation</Link>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="about-summary">
        <div className="container">
          <div className="about-summary-content">
            <div className="about-summary-text">
              <h2>Why Choose Everwel Home Care?</h2>
              <p>
                For over a decade, Everwel Home Care has been Washington's trusted provider 
                of in-home care services. We understand that maintaining independence at home 
                is important to both seniors and their families.
              </p>
              <p>
                Our licensed caregivers deliver compassionate, professional support that 
                enhances quality of life while respecting individual dignity and preferences.
              </p>
              <p>
                We partner with families, healthcare providers, and community organizations 
                to develop comprehensive care plans that meet each client's unique needs.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="about-summary-image">
              <div className="image-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <p>Trusted Care in Familiar Surroundings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Comprehensive Services</h2>
          <p className="section-subtitle">
            Professional in-home care services tailored to support independent living
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>Personal Care Assistance</h3>
              <p>Bathing, grooming, dressing, and mobility assistance to maintain personal dignity and hygiene.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3>Homemaking Support</h3>
              <p>Meal preparation, light housekeeping, laundry, and transportation services.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Companionship Care</h3>
              <p>Conversation, social engagement, medication reminders, and wellness monitoring.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>24-Hour Live-In Care</h3>
              <p>Round-the-clock support for individuals requiring continuous care and supervision.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary btn-large">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Everwel */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Families Trust Everwel</h2>
          <p className="section-subtitle">
            Licensed, insured, and committed to excellence in home care services
          </p>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="why-choose-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="why-choose-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Maintain Independence at Home?</h2>
            <p>
              Contact us today for a free, no-obligation assessment. Our care coordinators 
              will discuss your needs and develop a personalized care plan that fits your 
              lifestyle and budget.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-accent btn-large">Schedule Free Assessment</Link>
              <Link to="/how-it-works" className="btn btn-outline btn-large">How It Works</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

