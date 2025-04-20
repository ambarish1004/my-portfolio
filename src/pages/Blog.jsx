// src/pages/Blog.jsx
import { motion } from "framer-motion";
import BlogList from "../components/BlogList";

const Blog = () => {
  return (
    <motion.div
      className="blog-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="blog-heading">🧠 Thoughts & Experiments</h1>
      <BlogList />
    </motion.div>
  );
};

export default Blog;
