import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./Component/NavBar";
import { useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([])
  return (
    <div className='App'>
      <NavBar/>
      <h1>App Component</h1>
    <Outlet context={{blogs, setBlogs}}/>
    </div>
  );
}

export default App;
