import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css'

const testimonials = [
  {
    name: "Alexa Young, CA",
    text: "Working with K. O’Connell transformed our digital presence. Their strategies are innovative and effective."
  },
  {
    name: "Morgan James, NY",
    text: "K. O’Connell’s team is dedicated, creative, and results-driven. They truly understand our brand and audience."
  },
  {
    name: "Lisa Driver, MI",
    text: "The ROI we’ve seen since partnering with K. O’Connell has been outstanding. Highly recommend their services."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section text-center h-100 pt-5" id='reviews'>
      <h2 className="fw-bold mb-3">Testimonials</h2>
      <p className="mb-5">
        Our clients love the results we deliver. Discover what they have to say about working with K. O’Connell.
      </p>

      <div className="container">
        <div className="row justify-content-center">
          {testimonials.map((item, idx) => (
            <div key={idx} className="col-md-4 mb-4 d-flex flex-column align-items-center">
              <motion.div
                className="testimonial-icon mb-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                ❝❞
              </motion.div>
              <div className="testimonial-name">{item.name}</div>
              <p className="testimonial-text px-3">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
