import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';
import career from '../assets/Career.jpg';
import railway from '../assets/railway.jpg';
import chatbot from '../assets/chatbot.jpg';
import tictactoe from '../assets/tictactoe.jpg';
import figma from '../assets/figma.jpg';

const projectData = [
  {
    title: 'Career Roadmap Generator',
    description: 'AI-powered platform using React.js, Node.js, Express, and MongoDB to generate personalized career paths with real-time mentor matching and chat support.',
    img: career ,
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'WebSocket'],
    live: 'https://your-animeverse.live',
    github: 'https://github.com/ambarish1004/career_roadmap_generator',
  },
  {
    title: 'Conversational Image Recognition Chatbot',
    description: 'AI chatbot using YOLOv5 and Flask for real-time object detection and contextual image analysis.',
    img: chatbot,
    tech: ['Python', 'YOLOv5', 'Node.js', 'HTML'],
    live: 'https://your-animeverse.live',
    github: 'https://github.com/ambarish1004/Conversational-Image-Recognition-Chatbot',
  },
  {
    title: 'Railway Registration Management System',
    description: 'A complete train schedule manager with registration, cancellation, and improved DB performance.',
    img: railway,
    tech: ['Python', 'JavaScript', 'SQL', 'Flask'],
    live: 'https://your-animeverse.live',
    github: 'https://github.com/ambarish1004/Railway-Registration-Management',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'A fun web-based game that lets users play Tic-Tac-Toe with clean UI and winner detection logic.',
    img: tictactoe,
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://ambarish2004.github.io/Tic-Tac-Toe-Game/',
    github: 'https://github.com/Ambarish2004/Tic-Tac-Toe-Game',
  },
  {
    title: 'Figma Designs',
    description: 'A collection of creative UI/UX design projects including Echoes, Fashion Haven, and an ISL learning app.',
    img: figma,
    tech: ['Figma', 'UI/UX'],
    live: 'https://ambarish1004.github.io/Figma-Designs/',
    github: 'https://github.com/ambarish1004/Figma-Designs',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>🚀 My Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
