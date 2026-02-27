import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    'Seattle', 'Tacoma', 'Spokane', 'Bellevue', 'Kirkland', 'Renton'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Everwel Home Care</h3>
            <p className="footer-description">
              Compassionate, reliable in-home care services designed to support 
              independence, comfort, and peace of mind for Washington State families.
            </p>
            <div className="footer-badges">
              <span className="badge">Licensed & Bonded</span>
              <span className="badge">Washington State</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/care-team">Care Team</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subheading">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Personal Care</Link></li>
              <li><Link to="/services">Companion Care</Link></li>
              <li><Link to="/services">Homemaking Support</Link></li>
              <li><Link to="/services">Respite Care</Link></li>
              <li><Link to="/services">24-Hour Care</Link></li>
              <li><Link to="/services">Remote Caregiving</Link></li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="footer-section">
            <h4 className="footer-subheading">Service Areas</h4>
            <ul className="footer-links service-area-list">
              {serviceAreas.map((area) => (
                <li key={area}>Home Care {area}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>(206) 255-7080 & (401) 226-5686</span>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>everwelhomecare@gmail.com</span>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>everwelhomecare.com</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Everwel Home Care. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

