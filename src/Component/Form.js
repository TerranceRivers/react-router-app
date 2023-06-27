import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";


const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate()

  const { setBlogs } = useOutletContext();

  const handleOnSubmit = () => {
    setBlogs((prevBlogs) => {
      const newBlog = {
        title,
        content,
        author,
        id: prevBlogs.length + 1
      };
      return [...prevBlogs, newBlog];
    });

    setTitle("");
    setContent("");
    setAuthor("");
    navigate("/")
  };

  return (
    <div>
      <label htmlFor="title">Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label htmlFor="content">Content:</label>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <label htmlFor="author">Author:</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <br />
      <button onClick={handleOnSubmit}>Submit</button>
    </div>
  );
};

export default Form;
