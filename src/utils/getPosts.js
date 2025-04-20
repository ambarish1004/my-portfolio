// src/utils/getPosts.js
import matter from "gray-matter";

export const getPosts = () => {
  const context = import.meta.glob('../posts/*.md', { eager: true });
  const posts = [];

  for (const key in context) {
    const file = context[key];
    const slug = key.split('/').pop().replace('.md', '');
    const { data } = matter(file.default);
    posts.push({ ...data, slug });
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};
