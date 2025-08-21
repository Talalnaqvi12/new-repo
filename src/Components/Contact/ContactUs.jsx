import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactUs.css";
import MetaImage from "../../assets/services/meta.png";
const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "eed3ce6e-9d95-4ae3-958e-255d52e26c1a");
    // formData.append("access_key", process.env.Web3From_API);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully 🎉");
      event.target.reset();
    } else {
      setResult("Something went wrong. Try again.");
    }
  };

  return (
    <section className="contact-section" id="contactUs">
      <div className="contact-container">
        <h2 className="contact-heading">Contact US</h2>

        <div className="contact-flex">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={onSubmit} className="contact-form">
              {/* NOTE: We're keeping the contact-row div for the side-by-side inputs but will use consistent spacing in the CSS. */}
              <div className="contact-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  required
                />
              </div>
              <input type="email" name="email" placeholder="Email *" required />
              <input type="tel" name="phone" placeholder="Phone" />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
              ></textarea>

              <button type="submit" className="submit-btn">
                Request a Consultation
              </button>
              {result && <p className="form-result">{result}</p>}
            </form>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            className="testimonial-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <h4 className="testimonial-heading">What Our Clients Say</h4> */}
            <div className="testimonial-card">
              {/* We've created a new div to group the logo and stars for better alignment */}
              <div className="testimonial-header-group">
                {/* Company Logo */}
                <img
                  src={MetaImage}
                  alt="Company Logo"
                  className="testimonial-company-logo"
                />
                {/* Animated Stars */}
                <div className="testimonial-stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                
              </div>

              {/* Highlighted Quote */}
              {/* <blockquote className="testimonial-quote">
                "Working with <strong>EIE Company</strong> was a game-changer!
                They revamped our Shopify store, optimized our UX, and our
                <strong>sales increased by 40%</strong> within 2 months."
              </blockquote> */}
               
              <blockquote className="testimonial-quote">
                Partnering with ScaleCredo completely transformed our online business. We came in with a slow, outdated website and constant roadblocks in our customer journey. Their team redesigned everything—from a frictionless checkout to advanced product filtering—and the impact was immediate. Within just two months, our conversions jumped by 42% and customer satisfaction skyrocketed. What impressed us most was their proactive communication, attention to detail, and genuine commitment to our growth. ScaleCredo isn’t just a service provider—they’ve become a long-term growth partner for our brand.
  {/* "We came to EIE Company with an outdatedand a clunky user experience.customer journey, from a streamlined checkout process to a more intuitive product filtering system. The results were nothing short of incredible—our sales increased by over 40% in just two months, and our customer feedback has been overwhelmingly positive. Their team is professional, communicative, and truly invested in our success. We consider them a vital part of our growth strategy." */}
</blockquote>

              {/* Date/Timeline */}
              <p className="testimonial-detail"> <strong>Project:</strong>  Shopify Store Revamp </p>

              {/* Author */}
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="Client"
                />
                <div>
                  <h5>Sarah M.</h5>
                  <p>E-Commerce Manager, FMG </p>
                </div>
              </div>
                <p className="date"> <strong>June 5,2025</strong>  </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;