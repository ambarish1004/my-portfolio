// src/data/projectData.js
import career from '../assets/Career.jpg';
import railway from '../assets/railway.jpg';
import chatbot from '../assets/chatbot.jpg';
import tictactoe from '../assets/tictactoe.jpg';
import figma from '../assets/figma.jpg';

export const projectData = [
    {
      id: 1,
      title: 'Career Roadmap Generator',
      description: 'AI-powered platform using React.js, Node.js, Express, and MongoDB to generate personalized career paths with real-time mentor matching and chat support.',
      img: career,
      tech: ['React', 'CSS', 'Anime API'],
      live: 'https://your-animeverse.live',
      github: 'https://github.com/you/animeverse',
      detail: 'This project showcases advanced API handling, UI optimization, and custom pagination.',
    },
    {
      id: 2,
      title: 'Weather Wizard',
      description: 'A beautiful weather app using OpenWeatherMap API.',
      img: '/assets/weather.png',
      tech: ['React', 'OpenWeather API'],
      live: 'https://your-weatherwizard.live',
      github: 'https://github.com/you/weatherwizard',
      detail: 'The UI is inspired by Studio Ghibli scenes with background gradient animation depending on weather.',
    },
  ];
  