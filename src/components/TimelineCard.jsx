// src/components/TimelineCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Timeline.css';

const TimelineCard = ({ year, title, description }) => {
  return (
    <motion.div
      className="timeline-card"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="timeline-year">{year}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
