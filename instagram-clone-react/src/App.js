import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post.js';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect -> Runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //everytime a new post is added, this code will fire
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__header-image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>
      <h1>Everybody is Welcome</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />

        ))
      }

      {/* /Post/ */}
      {/* /Post/ */}
    </div>
  );
}

export default App;


