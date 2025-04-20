import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './About.css';
import { TypeAnimation } from 'react-type-animation';
import TechStack from '../components/TechStack';
import anime1 from '../assets/anime-character.png';

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <>
      <motion.section
        className="about-section"
        id="about"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
      >
        <div className="glitch-container">
          <h2 className="glitch-title" data-text="ABOUT ME">
            ABOUT ME
          </h2>
        </div>

        <div className="about-with-illustration">
          <div className="about-left">
            <div className="about-content">
              <TypeAnimation
                sequence={[
                  'Hey there, I’m AMBAR 👋',
                  1000,
                  'a developer 💻',
                  1000,
                  'a designer 🎨',
                  1000,
                  'a creator of vibes 🌈',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="typing-text"
                repeat={Infinity}
              />

            <div className="about-split">
              <div>
                <h3>🧠 Code</h3>
                <p>
                  Passionate about building efficient, secure, and scalable full-stack apps using React.js, Node.js, and MongoDB. I love transforming ideas into robust systems.
                </p>
              </div>
              <div>
                <h3>🎨 Creative</h3>
                <p>
                  Whether it's designing clean UIs or crafting seamless user journeys, I treat every feature as a blend of logic and creativity — with a touch of motion magic.
                </p>
              </div>
              <div>
                <h3>⚙️ Skills</h3>
                <p>
                  React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Python, C++, API Dev, Git, Agile, and a sprinkle of AI magic 🤖✨
                </p>
              </div>
            </div>

            </div>
          </div>

          <div className="about-right">
            <img src={anime1} alt="Anime" />
          </div>
        </div>
      </motion.section>

      {/* 🧩 Place TechStack right after About section */}
      <TechStack />
    </>
  );
};

export default About;
