import React from "react";
import { useOutletContext } from "react-router-dom";
import BlogCard from "../Component/BlogCard";

function Home() {
const { blogs } = useOutletContext();

  return (
    <div>
      <h1>Home</h1>
      {blogs.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            blog={blog} 
          />
        );
      })}
    </div>
  );
}

export default Home;
