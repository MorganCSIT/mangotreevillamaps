import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import './Blog.css';

const BlogList = () => {
  return (
    <div className="blog-container">
      <h1>Explore Phuket</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-image-container">
              <img src={post.imageUrl} alt={post.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <div className="blog-category">{post.category}</div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;