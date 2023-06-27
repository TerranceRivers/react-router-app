import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate()
  return (
    <div className="blogcard">
      <h3>Title: {blog.title}</h3>
      <p>Content: {blog.content}</p>
      <p>Author: {blog.author}</p>
      <button onClick={()=> navigate(`/blog/${blog.id}/edit`)}>Edit</button>
    </div>
  );
};

export default BlogCard;