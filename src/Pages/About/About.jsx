import React from "react";
import "./About.css";
import { FaLaptopCode, FaPalette, FaUsers, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        {/* Left: Text */}
        <div className="about-text">
          <h2> About Us  <span>ScaleCredo</span></h2>
          <p>
          

Turning Digital Ambitions Into Scalable Growth

At ScaleCredo, we believe every brand has the potential to scale beyond limits. We are a startup service agency that specializes in custom web development, multichannel e-commerce growth, and AI-powered automation workflows. Our mission is simple: help ambitious businesses transform into high-performing, revenue-generating brands that dominate their industries.

We’re not just another digital agency. We are your growth partner—the team you can rely on to design, build, and optimize your entire digital presence so it doesn’t just look great, but also delivers measurable business results.
          </p>

           <h3> What we offer </h3>
           <ul className="about-list">
            <li>We design high-speed, mobile-first, SEO-optimized Shopify & WordPress websites built to convert, scale, and reflect your brand.</li>
            <li>We drive multichannel DTC growth with omnichannel ads, creative content, analytics, and AI-powered automation to scale your brand efficiently.</li>
            {/* <li>Tailored Branding Strategies To Drive Engagement</li> */}
          </ul>
        
          {/* <div className="about-features">
            <div className="feature">
              <FaLaptopCode className="icon" />
              <h4>Modern Development</h4>
            </div>
            <div className="feature">
              <FaPalette className="icon" />
              <h4>Creative Design</h4>
            </div>
            <div className="feature">
              <FaUsers className="icon" />
              <h4>Client-Centered</h4>
            </div>
            <div className="feature">
              <FaRocket className="icon" />
              <h4>Scalable Solutions</h4>
            </div>
          </div> */}
        </div>

        {/* Right: Image */}
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop" 
            alt="Our Team" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;










