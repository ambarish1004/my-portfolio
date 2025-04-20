import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import ThemeToggle from "./ThemeToggle";

const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 60 }}
    >
      <div className="nav-inner">
        <motion.h1 className="logo" whileHover={{ scale: 1.1 }}>
          <span className="anime">Explore my creative playground</span>
        </motion.h1>

        <ul className="nav-links">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
                <span className="underline" />
              </a>
            </motion.li>
          ))}
          <ThemeToggle/>  
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
