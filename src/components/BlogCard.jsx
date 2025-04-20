// src/components/BlogCard.jsx
import { Link } from "react-router-dom";
import "../styles/Blog.css";

const BlogCard = ({ title, date, excerpt, slug }) => {
  return (
    <Link to={`/blog/${slug}`} className="blog-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <span>{new Date(date).toDateString()}</span>
    </Link>
  );
};

export default BlogCard;
