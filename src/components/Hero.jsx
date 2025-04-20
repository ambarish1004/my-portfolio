import { motion } from 'framer-motion';
import '../styles/hero.css';
import myImage from '../assets/new.png'; // your image here

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* TEXT LEFT SIDE */}
      <div className="hero-left">
        <motion.h1
          className="hero-title"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.5 }}
        >
          <span className="anime-text">Hello!, I’m</span>
          <br />
          <span className="hero-name">Ambarish S. Satbhai</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Crafting code & chaos with style ⚔️
        </motion.p>
      </div>

      {/* IMAGE RIGHT SIDE */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="hero-image-wrapper">
          <img src={myImage} alt="Ambarish Anime Style" className="hero-image" />
          <div className="hero-glow-circle"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
