import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'personal-care',
      title: 'Personal Care Assistance',
      icon: '🧑‍⚕️',
      description: 'Professional support with daily living activities essential to comfort and independence.',
      features: [
        'Bathing and grooming',
        'Dressing and toileting',
        'Mobility and transfers',
        'Eating support',
        'Personal hygiene'
      ],
      keyword: 'personal care services Washington'
    },
    {
      id: 'homemaking',
      title: 'Homemaking & Daily Living Support',
      icon: '🏠',
      description: 'Essential household task management to maintain a comfortable living environment.',
      features: [
        'Meal planning and preparation',
        'Grocery shopping',
        'Light housekeeping and laundry',
        'Errands and transportation',
        'Appointment coordination'
      ],
      keyword: 'in-home caregiver assistance'
    },
    {
      id: 'companionship',
      title: 'Companionship & Wellness',
      icon: '💬',
      description: 'Social engagement and emotional support to enhance overall well-being.',
      features: [
        'Conversation and social engagement',
        'Activity participation',
        'Emotional support',
        'Wellness check-ins'
      ],
      keyword: 'companionship care services'
    },
    {
      id: 'respite',
      title: 'Respite Care',
      icon: '⏰',
      description: 'Temporary support so family caregivers can rest, travel, or focus on other responsibilities.',
      features: [
        'Short-term care coverage',
        'Weekend support',
        'Vacation relief',
        'Emergency coverage'
      ],
      keyword: 'respite home care Washington'
    }
  ];

  const careOptions = [
    {
      title: 'Hourly Care',
      description: 'Flexible hourly assistance tailored to your schedule'
    },
    {
      title: 'Overnight Support',
      description: '24-hour peace of mind with overnight caregiver presence'
    },
    {
      title: 'Live-in Care',
      description: 'Comprehensive around-the-clock care and companionship'
    },
    {
      title: 'Transitional Care',
      description: 'Post-hospital recovery support for a smooth transition home'
    }
  ];

  const remoteServices = [
    'Medication reminders',
    'Routine prompts',
    'Emotional support',
    'Wellness monitoring'
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p className="page-header-subtitle">
            Comprehensive in-home care solutions tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Personal Care */}
      <section className="service-section" id="personal-care">
        <div className="container">
          <div className="service-content">
            <div className="service-info">
              <div className="service-icon-large">🧑‍⚕️</div>
              <h2>Personal Care Assistance</h2>
              <p className="service-description">
                We help with everyday activities essential to comfort and independence. 
                These services reflect common assistance with activities of daily living 
                provided by home-care agencies.
              </p>
              <ul className="service-features">
                <li>Bathing and grooming</li>
                <li>Dressing and toileting</li>
                <li>Mobility and transfers</li>
                <li>Eating support</li>
                <li>Personal hygiene</li>
              </ul>
              <p className="keyword-tag">Keyword: personal care services Washington</p>
            </div>
          </div>
        </div>
      </section>

      {/* Homemaking */}
      <section className="service-section alt-bg" id="homemaking">
        <div className="container">
          <div className="service-content">
            <div className="service-info">
              <div className="service-icon-large">🏠</div>
              <h2>Homemaking & Daily Living Support</h2>
              <p className="service-description">
                Homemaking assistance helps clients manage essential household tasks and 
                maintain their living environment.
              </p>
              <ul className="service-features">
                <li>Meal planning and preparation</li>
                <li>Grocery shopping</li>
                <li>Light housekeeping and laundry</li>
                <li>Errands and transportation</li>
                <li>Appointment coordination</li>
              </ul>
              <p className="keyword-tag">Keyword: in-home caregiver assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Companionship */}
      <section className="service-section" id="companionship">
        <div className="container">
          <div className="service-content">
            <div className="service-info">
              <div className="service-icon-large">💬</div>
              <h2>Companionship & Wellness</h2>
              <p className="service-description">
                Home care can include social and supportive services delivered on flexible 
                schedules based on needs.
              </p>
              <ul className="service-features">
                <li>Conversation and social engagement</li>
                <li>Activity participation</li>
                <li>Emotional support</li>
                <li>Wellness check-ins</li>
              </ul>
              <p className="keyword-tag">Keyword: companionship care services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Respite Care */}
      <section className="service-section alt-bg" id="respite">
        <div className="container">
          <div className="service-content">
            <div className="service-info">
              <div className="service-icon-large">⏰</div>
              <h2>Respite Care</h2>
              <p className="service-description">
                We provide temporary support so family caregivers can rest, travel, or 
                focus on other responsibilities. Respite assistance is a recognized 
                service provided by agencies supporting families.
              </p>
              <ul className="service-features">
                <li>Short-term care coverage</li>
                <li>Weekend support</li>
                <li>Vacation relief</li>
                <li>Emergency coverage</li>
              </ul>
              <p className="keyword-tag">Keyword: respite home care Washington</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Care Options */}
      <section className="care-options-section">
        <div className="container">
          <h2 className="section-title">Flexible Care Options</h2>
          <p className="section-subtitle">
            Flexible service structures are common among Washington agencies
          </p>
          <div className="care-options-grid">
            {careOptions.map((option, index) => (
              <div key={index} className="care-option-card">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Caregiving */}
      <section className="remote-section">
        <div className="container">
          <div className="remote-content">
            <div className="remote-info">
              <h2>Remote Caregiving (Optional Program)</h2>
              <p>
                Everwel offers virtual check-ins and reminders using secure technology 
                where appropriate. Washington allows licensed agencies to provide remote 
                caregiving services alongside in-person care.
              </p>
              <h3>Remote support may include:</h3>
              <ul className="remote-features">
                {remoteServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="remote-visual">
              <div className="remote-icon">📱</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Private Care */}
      <section className="premium-section">
        <div className="container">
          <h2 className="section-title">Premium Private Care Options</h2>
          <p className="section-subtitle">
            Everwel offers enhanced concierge-style support
          </p>
          <div className="premium-grid">
            <div className="premium-card">
              <div className="premium-icon">✨</div>
              <h3>Extended Availability</h3>
              <p>Care when you need it, any time of day</p>
            </div>
            <div className="premium-card">
              <div className="premium-icon">🌟</div>
              <h3>Lifestyle-Focused Care</h3>
              <p>Personalized support tailored to your preferences</p>
            </div>
            <div className="premium-card">
              <div className="premium-icon">💎</div>
              <h3>Personalized Attention</h3>
              <p>One-on-one care with dedicated caregivers</p>
            </div>
            <div className="premium-card">
              <div className="premium-icon">⚡</div>
              <h3>Priority Scheduling</h3>
              <p>First access to available care slots</p>
            </div>
          </div>
          <p className="keyword-tag-center">Keyword: private pay home care</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Find the Right Care for You</h2>
            <p>
              Contact us today to discuss your specific needs and create a 
              personalized care plan.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-accent btn-large">Request a Consultation</a>
              <a href="/how-it-works" className="btn btn-outline btn-large">How It Works</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

