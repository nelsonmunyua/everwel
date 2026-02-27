import './About.css';

const About = () => {
  const values = [
    {
      title: 'Compassion',
      description: 'We treat every client with empathy, respect, and kindness.',
      icon: '💙'
    },
    {
      title: 'Integrity',
      description: 'We operate transparently, ethically, and responsibly.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'We hold ourselves to the highest caregiving standards.',
      icon: '⭐'
    },
    {
      title: 'Dignity',
      description: 'We protect independence and personal choice.',
      icon: '👤'
    },
    {
      title: 'Reliability',
      description: 'Families can count on consistent, dependable support.',
      icon: '✓'
    },
    {
      title: 'Community',
      description: 'We serve and strengthen local Washington communities.',
      icon: '🏘️'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Everwel Home Care</h1>
          <p className="page-header-subtitle">
            Enriching lives through compassionate, personalized in-home care
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p className="mission-statement">
                To enrich lives by delivering compassionate, reliable, and personalized 
                in-home care that empowers individuals across Washington State to live 
                safely, independently, and with dignity.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-icon">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-visual">
              <div className="vision-icon">🔭</div>
            </div>
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p className="vision-statement">
                To become Washington's most trusted home care partner — known for elevating 
                care standards, strengthening families, and redefining what it means to 
                age and recover comfortably at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Everwel Home Care was founded to bridge the gap between accessibility 
                and excellence in home care. We believe every individual deserves 
                high-quality support tailored to their goals, values, and lifestyle.
              </p>
              <p>
                Our team prioritizes respect, professionalism, relationship building, 
                and consistency in We collaborate closely with families 
                to everything we do. ensure care remains responsive and aligned with evolving needs.
              </p>
              <p>
                As a licensed home care provider in Washington State, we are committed 
                to maintaining the highest standards of care while making our services 
                accessible to families throughout the region.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Families Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Caregivers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Cities in Washington</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us today to learn how we can help you or your loved one 
              receive the quality care you deserve.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-accent btn-large">Request a Consultation</a>
              <a href="/services" className="btn btn-outline btn-large">Our Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

