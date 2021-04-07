import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response);
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div className="title">{value.title}</div>
            <div className="postText">{value.postText}</div>
            <div className="username">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
