import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("https://connect-with-me-7a6t.onrender.com/api/posts/profile/" + username)
        : await axios.get("https://connect-with-me-7a6t.onrender.com/api/posts/timeline/" + user._id);
      setPosts(
        res.data?.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  // console.log(!posts, "post")
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.length ? posts.map((p) => (
          <Post key={p._id} post={p} />
        )) : <h1 className="noPost"> No post available for you please upload your first  post </h1>}
      </div>
    </div>
  );
}
