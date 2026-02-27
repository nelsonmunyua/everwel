import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your needs, goals, and scheduling preferences to understand what matters most to you.',
      icon: 'chat'
    },
    {
      number: '02',
      title: 'Care Plan Development',
      description: 'We create a tailored service plan designed around your unique needs, preferences, and lifestyle.',
      icon: 'clipboard'
    },
    {
      number: '03',
      title: 'Caregiver Match',
      description: 'You meet your assigned caregiver to ensure a good fit and comfortable relationship.',
      icon: 'users'
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'Regular reviews and adjustments to ensure your care continues to meet your evolving needs.',
      icon: 'support'
    }
  ];

  const benefits = [
    {
      title: 'Commitment to Independence',
      description: 'We help you maintain control over your daily life and decisions'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Care plans that adapt to your routine and preferences'
    },
    {
      title: 'Family Collaboration',
      description: 'We keep your loved ones informed and involved in care decisions'
    },
    {
      title: 'Compliance with Washington Standards',
      description: 'Licensed agencies operate under strict health and safety oversight'
    },
    {
      title: 'Compassion-Driven Culture',
      description: 'Every interaction is guided by empathy and genuine care'
    }
  ];

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'chat':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        );
      case 'clipboard':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        );
      case 'users':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'support':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="12" cy="8" r="1.5"></circle>
            <circle cx="12" cy="16" r="1.5"></circle>
          </svg>
        );
      case 'phone':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        );
      case 'document':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
      case 'handshake':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
            <path d="M8 12H4"></path>
            <path d="M20 12h-4"></path>
          </svg>
        );
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="how-it-works-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>How It Works</h1>
          <p className="page-header-subtitle">
            Getting started with Everwel Home Care is simple
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Simple Process</h2>
          <p className="section-subtitle">
            Individualized care planning is standard industry practice based on needs assessments
          </p>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{renderIcon(step.icon)}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="detailed-section">
        <div className="container">
          <div className="detailed-content">
            <div className="detailed-step">
              <div className="detailed-icon">{renderIcon('phone')}</div>
              <div className="detailed-info">
                <h2>Step 1: Initial Consultation</h2>
                <p>
                  Contact us to schedule a free, no-obligation consultation. During this 
                  conversation, we'll discuss:
                </p>
                <ul>
                  <li>Your specific care needs and preferences</li>
                  <li>Schedule requirements and flexibility</li>
                  <li>Budget considerations</li>
                  <li>Any immediate concerns or questions</li>
                </ul>
              </div>
            </div>

            <div className="detailed-step">
              <div className="detailed-icon">{renderIcon('document')}</div>
              <div className="detailed-info">
                <h2>Step 2: Care Plan Development</h2>
                <p>
                  Based on our consultation, we'll create a comprehensive care plan that includes:
                </p>
                <ul>
                  <li>Specific services and support activities</li>
                  <li>Schedule and duration</li>
                  <li>Caregiver qualifications and preferences</li>
                  <li>Communication protocols</li>
                </ul>
              </div>
            </div>

            <div className="detailed-step">
              <div className="detailed-icon">{renderIcon('handshake')}</div>
              <div className="detailed-info">
                <h2>Step 3: Caregiver Matching</h2>
                <p>
                  We carefully match you with a caregiver who meets your needs:
                </p>
                <ul>
                  <li>Review caregiver profiles and experience</li>
                  <li>Schedule introduction meeting</li>
                  <li>Ensure compatibility and trust</li>
                  <li>Make adjustments if needed</li>
                </ul>
              </div>
            </div>

            <div className="detailed-step">
              <div className="detailed-icon">{renderIcon('shield')}</div>
              <div className="detailed-info">
                <h2>Step 4: Ongoing Support</h2>
                <p>
                  Our commitment doesn't end with the first visit:
                </p>
                <ul>
                  <li>Regular check-ins and quality assessments</li>
                  <li>Flexible schedule adjustments</li>
                  <li>24/7 on-call support</li>
                  <li>Family communication and updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Everwel */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Everwel</h2>
          <p className="section-subtitle">
            We're committed to providing the highest quality home care
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="benefit-info">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="how-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin?</h2>
            <p>
              Take the first step towards quality home care. Contact us today 
              for a free consultation.
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

export default HowItWorks;

