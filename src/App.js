import React, { useRef, useState } from "react";
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
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  }

  return (
    <div className="App">
      <MyInput
        placeholder='title'
        type='text'
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
      />
      <MyInput
        placeholder='description'
        type='text'
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
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
