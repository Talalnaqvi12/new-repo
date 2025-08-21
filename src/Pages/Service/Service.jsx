import React from "react";
import "./Service.css";

const ServicesSection = () => {
  const services = [
    {
      icon: "uil uil-code",
      title: "Shopify & WordPress Development",
      description:
        "Your website is your strongest sales channel. We craft fast, responsive, and SEO-optimized websites that convert visitors into paying customers. From custom store setups to complex integrations, our goal is simple: make your brand stand out and sell more online",
      highlights: [
        "Shopify store design & optimization",
        " WordPress & WooCommerce development",
        "Mobile-first, conversion-focused design",
        "SEO built into every page"
      ],
      ctaText: "See Projects",
      ctaLink: "#projects",
    },
    {
      icon: "uil uil-bullhorn",
      title: "Multichannel DTC Brand Growth",
      description:
        "Scaling a brand takes more than one channel. We create data-driven marketing strategies and engaging content to expand your reach, boost sales, and keep customers coming back.",
      highlights: [
        "Omnichannel campaigns (Meta, Google, TikTok, Amazon)",
        "High-impact content (video, design, copy)",
        "Analytics & conversion tracking",
        "AI automation to save time & maximize ROI"
      ],
      ctaText: "See Results",
      ctaLink: "projects",
    },
  ];
const handleAnchorClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="services-section" >
      <div className="services-container">
        <header className="section-header">
          <h2>Our Expertise</h2>
          <p className="subtitle">
           Building High-Performing Websites & Scalable E-Commerce Brands
          </p>
          <p className="description">
           At ScaleCredo, we don’t just build websites — we build growth engines. Whether you need a conversion-driven Shopify store, a custom WordPress website, or a multichannel DTC strategy, our team delivers solutions designed to grow revenue, increase visibility, and scale your brand long-term.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <i className={`service-icon ${service.icon}`} />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-highlights">
                {service.highlights.map((h) => (
                  <li key={h}>
                    <i className="uil uil-arrow-right"></i> {h}
                  </li>
                ))}
              </ul>
              <a href={service.ctaLink} className="learn-more-btn"
              onClick={(e) => handleAnchorClick(e, service.ctaLink)}>
                {service.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
