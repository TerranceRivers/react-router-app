import React, { useEffect, useState } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const { id } = useParams();
  const { blogs, setBlogs } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog.id.toString() === id);
    setEditTitle(foundBlog.title);
    setEditContent(foundBlog.content);
  }, [id, blogs]);

  const handleOnSubmit = () => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.map((blog) => {
        if (blog.id.toString() === id) {
          return {
            ...blog,
            title: editTitle,
            content: editContent,

          };
        }
        return blog;
      });
      return updatedBlogs;
    });
    navigate("/")
  };
  const handleDelete = () => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.filter((blog) => blog.id.toString() !== id);
      return updatedBlogs;
    });
    navigate("/");
  };
  return (
    <div>
      <h1>Edit Blog:</h1>
      <label>Title:</label>
      <input
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <label>Content:</label>
      <input
        value={editContent}
        onChange={(e) => setEditContent(e.target.value)}
      />
      <button onClick={handleOnSubmit}>Submit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EditBlog;
