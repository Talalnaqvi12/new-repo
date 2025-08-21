import React from "react";
import "./Footer.css";
import ShopifyImage from "../../assets/services/shopify.png";
import WordpressImage from "../../assets/services/wordpress.png";
import GoogleImage from "../../assets/services/google.png";
import MetaImage from "../../assets/services/meta.png";
import { FaChevronUp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row gy-5">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 col-12">
            <h2 className="footer-brand">
              Scale<span className="highlight">Credo</span>
            </h2>
            <p className="footer-desc">
              Helping ambitious brands grow with scalable tech & marketing solutions.
            </p>
            {/* <div className="social-links">
              {["facebook", "twitter", "linkedin", "instagram"].map((icon) => (
                <a key={icon} href="#" aria-label={icon} className="social-link">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div> */}
            <div className="social-links">
  {/* <a href="#" aria-label="facebook" className="social-link facebook">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="#" aria-label="twitter" className="social-link twitter">
    <i className="fab fa-twitter"></i>
  </a> */}
  <a href="https://www.linkedin.com/company/scalecredo/about/?viewAsMember=true" aria-label="linkedin" className="social-link linkedin">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://www.instagram.com/scalecredo/profilecard/?igsh=YjA2eDhwMThyOGs2" aria-label="instagram" className="social-link instagram">
    <i className="fab fa-instagram"></i>
  </a>
  {/* <a href="mailto:info@scalecredo.com" aria-label="email" className="social-link email">
    <i className="fas fa-envelope"></i>
  </a> */}
</div>

          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-title">Services</h5>
            <ul className="footer-list">
              <li><a href="#shopify">Shopify Development</a></li>
              <li><a href="#wordpress">WordPress Development</a></li>
              <li><a href="#dtc">DTC Brand Growth</a></li>
              <li><a href="#seo">SEO & Analytics</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-title">Resources</h5>
            <ul className="footer-list">
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#awards">Awards & Recognition</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6 col-12">
            <h5 className="footer-title">Get in Touch</h5>
            <p>  <i className="fas fa-envelope"></i>info@scalecredo.com</p>
            <p><i className="fas fa-map-marker-alt me-2 "></i> Office #308, Capital Technology Park, Sun Rise Avenue, Islamabad</p>
         
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Trusted By */}
        <div className="trusted-by text-center">
          <h6 className="fw-bold mb-3">Trusted By:</h6>
          <div className="trusted-logos">
            <img src={ShopifyImage} alt="Shopify" />
            <img src={WordpressImage} alt="WordPress" />
            <img src={GoogleImage} alt="Google" />
            <img src={MetaImage} alt="Meta" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ScaleCredo. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a href="#top" className="back-to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </footer>
  );
};

export default Footer;

