import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: { y: '0', opacity: 1, transition: { delay: 0.1 } },
};

const ProjectModal = ({ title, description, img, github, live, onClose }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="modal-backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={img} alt={title} className="modal-img" />
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="modal-links">
            <a href={github} target="_blank">GitHub</a>
            <a href={live} target="_blank">Live</a>
          </div>
          <button onClick={onClose} className="close-btn">✖</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
