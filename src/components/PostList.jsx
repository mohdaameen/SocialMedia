import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { UserContext } from "../store/List-Post";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(UserContext);
  //  useEffect(() => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // }, []);
  return (
    <div>
      {postList.length === 0 && (
        <center>
          <h1>Post List is Empty</h1>
        </center>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default PostList;
