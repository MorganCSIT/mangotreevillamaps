import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./Blog.css";

const BlogList = () => {
  return (
    <div className="blog-container">
      <h1>Explore Phuket</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="blog-card-link"
          >
            <article className="blog-card">
              <div className="blog-image-container">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="blog-image"
                />
              </div>
              <div className="blog-content">
                <div className="blog-category">{post.category}</div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="read-more">Read More →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
