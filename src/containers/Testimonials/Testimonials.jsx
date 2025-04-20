// src/containers/Testimonials/Testimonials.jsx
import { testimonials } from "./testimonialsData";
import { motion } from "framer-motion";
import "../../styles/testimonials.css"; // Custom styles

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">💬 Testimonials</h2>

      <div className="testimonials-grid">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <p className="quote">“{item.quote}”</p>
            <p className="name">— {item.name}</p>
            <p className="role">{item.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
