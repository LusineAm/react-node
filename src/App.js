import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS 1", body: "Description" },
    { id: 2, title: "JS 2", body: "Description" },
    { id: 3, title: "JS 3", body: "Description" },
  ]);
  const [title, setTitle] = useState('');
  const addNewPost = (e) => {
    e.preventDefault();

  }

  return (
    <div className="App">
      <MyInput 
        placeholder='title'
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <MyInput 
        placeholder='description'
        type='text'
      />
      <MyButton 
        onClick={addNewPost}
      >
        Add Post
      </MyButton>
      <PostList posts={posts} title={"Post List 1"} />
    </div>
  );
}

export default App;
