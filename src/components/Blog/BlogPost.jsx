import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import './Blog.css';

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <img src={post.imageUrl} alt={post.title} className="blog-post-image" />
        <div className="blog-post-meta">
          <span className="blog-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="blog-post-info">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>
      <div className="blog-post-content">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;