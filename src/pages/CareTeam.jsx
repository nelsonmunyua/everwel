import './CareTeam.css';

const CareTeam = () => {
  const standards = [
    {
      title: 'Background Screening',
      description: 'Comprehensive background checks to ensure safety and trustworthiness',
      icon: '🔍'
    },
    {
      title: 'Skills Training',
      description: 'Ongoing professional development and certification',
      icon: '📚'
    },
    {
      title: 'Ongoing Supervision',
      description: 'Regular monitoring and quality assurance visits',
      icon: '👁️'
    },
    {
      title: 'Client-Centered Approach',
      description: 'Personalized care tailored to individual needs',
      icon: '💙'
    }
  ];

  const qualities = [
    'Compassionate and empathetic',
    'Professionally trained and certified',
    'Background-checked and vetted',
    'Dedicated to client dignity',
    'Reliable and dependable',
    'Excellent communicators'
  ];

  return (
    <div className="care-team-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Care Team</h1>
          <p className="page-header-subtitle">
            Dedicated caregivers committed to providing exceptional home care
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="team-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Meet Our Caregivers</h2>
              <p>
                Our caregivers are selected, trained, and supervised to ensure consistent 
                quality care. Home care agencies are responsible for recruiting and overseeing 
                aides who provide services, and we take this responsibility seriously.
              </p>
              <p>
                We believe relationships matter — and trust begins with professionalism. 
                Every caregiver on our team is committed to treating clients with the 
                respect, dignity, and compassion they deserve.
              </p>
            </div>
            <div className="intro-visual">
              <div className="intro-icon">👨‍👩‍👧‍👦</div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="standards-section">
        <div className="container">
          <h2 className="section-title">Our Caregiver Standards</h2>
          <p className="section-subtitle">
            We maintain rigorous standards to ensure the highest quality of care
          </p>
          <div className="standards-grid">
            {standards.map((standard, index) => (
              <div key={index} className="standard-card">
                <div className="standard-icon">{standard.icon}</div>
                <h3>{standard.title}</h3>
                <p>{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caregiver Qualities */}
      <section className="qualities-section">
        <div className="container">
          <div className="qualities-content">
            <div className="qualities-visual">
              <div className="qualities-icon">✨</div>
            </div>
            <div className="qualities-info">
              <h2>What Sets Our Caregivers Apart</h2>
              <p>
                Our caregivers are more than just trained professionals — they're 
                compassionate individuals dedicated to making a difference in people's lives.
              </p>
              <ul className="qualities-list">
                {qualities.map((quality, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {quality}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Caregiver Selection Process</h2>
          <p className="section-subtitle">
            Every caregiver undergoes a thorough vetting process
          </p>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Application & Screening</h3>
              <p>Initial application review and preliminary screening</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Background Check</h3>
              <p>Comprehensive criminal background and reference verification</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Skills Assessment</h3>
              <p>Evaluation of caregiving skills and competencies</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Training</h3>
              <p>Comprehensive training on care procedures and protocols</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Client Matching</h3>
              <p>Careful matching based on needs, preferences, and personality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Meet Your Care Team</h2>
            <p>
              We invite you to get to know our caregivers and find the perfect 
              match for your family's needs.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-accent btn-large">Schedule a Consultation</a>
              <a href="/how-it-works" className="btn btn-outline btn-large">How It Works</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareTeam;

