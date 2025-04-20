import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import '../styles/Projects.css';

const ProjectCard = ({ title, description, img, tech, detail, github, live }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="project-card"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        onClick={() => setOpen(true)}
      >
        <div className="project-img" style={{ backgroundImage: `url(${img})` }} />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tech-tags">
            {tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {open && (
        <ProjectModal
          title={title}
          description={detail}
          img={img}
          github={github}
          live={live}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
