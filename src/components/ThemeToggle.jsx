import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      whileTap={{ scale: 0.9, rotate: 90 }}
    >
      {theme === "dark" ? "🌙" : "🌞"}
    </motion.button>
  );
};

export default ThemeToggle;
