import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post.js';
import { db } from './firebase';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { positions } from '@mui/system';
import { Input } from '@mui/material';
import spam from './Images/Spamgramlogo.jpg';

const style = {
  position: 'aboslute',
  top: '100%',
  left: '100%',
  transform: (20, 0),
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid lightgray',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  // useEffect -> Runs a piece of code based on a specific condition
  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //everytime a new post is added, this code will fire
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  const signUp = (event) => {
  }

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <div>
            <form className="signup-box">
              <center>
                <img
                  className="box-header-image"
                  src={spam}
                  alt=""
                />
              </center>
              <Input
                placeholder="text"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={signUp}>Sign up</Button>
            </form>


          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>

      </Modal>
      <div className="app__header">
        <img
          className="app__header-image"
          src={spam}
          alt=""
        />
      </div>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      <h1>Everybody is Welcome</h1>
      {/* /Post/ */}
      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />

        ))
      }
    </div>
  );
}

export default App;


