import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';

function Post() {
    return (
        <div className="post">
            <div className="post">
                <Avatar
                    className="post__avatar"
                    alt="Wainhouse" src="/static/images/avatar/1.jpg" />
                <h3>Username</h3>
            </div>

            {/* /header -> avatar + username/ */}

            <img className="post__image" alt=" " src="https://www.freecodecamp.org/news/content/images/size/w600/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" />
            {/* /image/ */}


            <h4 className="post__text"><strong>Wainhouse</strong> Day 1 of coding</h4>
            {/* /username + caption/ */}

        </div >
    )
}

export default Post
