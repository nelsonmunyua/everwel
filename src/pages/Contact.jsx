import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  const serviceAreas = [
    'Seattle', 'Tacoma', 'Spokane', 'Bellevue', 'Kirkland', 'Renton',
    'Everett', 'Olympia', 'Bellingham', 'Vancouver', 'Federal Way',
    'Kent', 'Bellevue', 'Spokane Valley', 'Auburn', 'Redmond'
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="page-header-subtitle">
            We're here to help. Reach out to discuss your home care needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Request a Consultation</h2>
              <p className="form-description">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(360) 555-0123"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="personal-care">Personal Care Assistance</option>
                    <option value="companionship">Companion Care</option>
                    <option value="homemaking">Homemaking Support</option>
                    <option value="respite">Respite Care</option>
                    <option value="hourly">Hourly Care</option>
                    <option value="overnight">Overnight Care</option>
                    <option value="live-in">Live-in Care</option>
                    <option value="other">Other/Not Sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your care needs..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h3>Get in Touch</h3>
                
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <p>(360) 555-0123</p>
                    <p className="info-note">Mon-Fri: 8am-6pm</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>info@everwelhomecare.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div className="info-content">
                    <h4>Service Area</h4>
                    <p>Throughout Washington State</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">🕐</span>
                  <div className="info-content">
                    <h4>Hours</h4>
                    <p>Office: Mon-Fri 8am-6pm</p>
                    <p>24/7 On-Call Support Available</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="service-areas-card">
                <h3>Service Areas</h3>
                <div className="service-areas-grid">
                  {serviceAreas.map((area, index) => (
                    <span key={index} className="area-tag">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="emergency-section">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-icon">⚠️</div>
            <div className="emergency-text">
              <h3>For Medical Emergencies</h3>
              <p>
                If you or your loved one is experiencing a medical emergency, 
                please call 911 immediately. Our services are non-medical in nature 
                and do not replace emergency medical care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

