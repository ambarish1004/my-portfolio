// src/pages/Post.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/Blog.css"; // ✅ style integration

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../posts/${slug}.md?raw`) // ✅ use ?raw to treat as raw string
      .then((module) => {
        setContent(module.default);
      })
      .catch((err) => {
        setContent("# 404\n\nPost not found."); // ✅ fallback markdown
        console.error("Post loading error:", err);
      });
  }, [slug]);

  return (
    <div className="blog-post">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Post;
