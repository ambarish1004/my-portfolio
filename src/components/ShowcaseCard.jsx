import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Showcase.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 100 },
  }),
};

const ShowcaseCard = ({ title, description, index, onClick }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="showcase-card"
      onClick={onClick}
    >
      <div className="showcase-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="view-cert-btn">View Certificate</button>
      </div>
    </motion.div>
  );
};

export default ShowcaseCard;
