import { getPosts } from "../utils/getPosts";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const posts = getPosts();

  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogList;
