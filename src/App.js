import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS 1", body: "Description" },
    { id: 2, title: "JS 2", body: "Description" },
    { id: 3, title: "JS 3", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={"Post List 1"} />
      <PostList posts={posts} title={"Post List 2"} />
    </div>
  );
}

export default App;
