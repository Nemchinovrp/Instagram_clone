import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt='Rafik'
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>
            <img
                className="post_image"
                src={imageUrl}/>
            <h4 className="post_text"><strong>Username: {username}</strong> {caption}</h4>
        </div>
    )
}

export default Post