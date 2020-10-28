import React, {useState} from "react";
import './App.css';
import Post from "./Post";

function App() {
    const [posts, setPosts] = useState([
        {
            username: "Valera",
            caption: "Beautiful",
            imageUrl: "https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"
        },
        {
            username: "Borya",
            caption: "Beautiful",
            imageUrl: "https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"
        },
        {
            username: "Kolya",
            caption: "Beautiful",
            imageUrl: "https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"
        }
    ]);

    return (
        <div className="app">
            <div className="app_header">
                <img
                    className="app_headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />
            </div>
            <h1>Hello Instagram Clone</h1>
            {
                posts.map(post =>(
                    <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
                ))
            }
        </div>
    );
}

export default App;
