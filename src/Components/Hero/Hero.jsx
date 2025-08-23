import React from "react";
import "./Hero.css";
import ShopifyImage from "../../assets/services/shopify.png";
import WordpressImage from "../../assets/services/wordpress.png";
import GoogleImage from "../../assets/services/google.png";
import MetaImage from "../../assets/services/meta.png";
import HeroImage from "../../assets/Hero/scalecredobanner.png"
import ChatgptLogo from"../../assets/Hero/logo1.png";
import ClaudeLogo from "../../assets/Hero/claude-logo.svg";
import GeminiLogo from "../../assets/Hero/gemini.png";
import perplexityLogo from "../../assets/Hero/per.png"

const HeroSection = () => (
  <section className="hero"

  >
    <div className="hero-overlay">
      <div className="hero-content">
        <h1>
         Smarter Web.<span className="highlight"> Stronger Growth </span>
        </h1>
        <p className="hero-description">
          Custom Web Development and Multi-Channel E-commerce for DTC Brands.
AI-driven strategies that help you scale faster, smarter, and sustainably
        </p>
        <button className="cta-btn">Get Started</button>

        {/* Social Proofing */}
        <div className="social-proof">
          <p className="hero-description">Automation Driven by Leading AI Tools</p>
          <div className="brands">
            <img src={ChatgptLogo} alt="Brand 1" />
            <img src={ClaudeLogo} alt="Brand 2" />
            <img src={GeminiLogo} alt="Brand 3" />
            <img src={perplexityLogo} alt="Brand 4" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;