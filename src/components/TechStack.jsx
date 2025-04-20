import React from 'react';
import '../styles/TechStack.css';
import useMagnetEffect from '../hooks/useMagnetEffect';

const skills = [
  { name: 'React', color: '#61DBFB' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'HTML5', color: '#e34c26' },
  { name: 'CSS3', color: '#264de4' },
  { name: 'Git', color: '#f05033' },
  { name: 'C++', color: '#00599C' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Node.js', color: '#3C873A' },
  { name: 'Express.js', color: '#FFEEFE' },
  { name: 'Tailwind CSS', color: '#38B2AC' },
  { name: 'Bootstrap CSS', color: '#7952B3' },
  { name: 'MySQL', color: '#00758F' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'GitHub', color: '#14AC17' },
  { name: 'OOP', color: '#6E57E0' },
  { name: 'Operating Systems', color: '#A179DC' },
  { name: 'API Development', color: '#E44D26' }
];


const TechStack = () => {
  useMagnetEffect();
  return (
    <section className="tech-stack">
      <h2>⚙️ Tech I Rock With</h2>
      <div className="skill-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-item" style={{ '--color': skill.color }}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
