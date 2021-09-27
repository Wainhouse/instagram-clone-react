import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post.js';
import { db } from '.firebase';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Wainhouse",
      caption: "Wadup",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w600/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username: "Wainhouse",
      caption: "Wadup",
      imageUrl: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
    },
  ]);

  // useEffect -> Runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot)
    //everytime a new post is added, this code will fire
    setPosts(snapshot.docs.map(doc => doc.data()));

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

      <Post username="Wainhouse" caption="Wadup" imageUrl="https://www.freecodecamp.org/news/content/images/size/w600/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" />
      <Post username="Bucky" caption="ball boy" imageUrl="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" />
      <Post username="Yesmate" caption="nuts" imageUrl="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/11/27135515/Grooming-tips-from-experts-hero.jpg" />
      {/* /Post/ */}
      {/* /Post/ */}
    </div>
  );
}

export default App;
