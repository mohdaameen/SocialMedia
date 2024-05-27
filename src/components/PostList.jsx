import React, { useContext } from "react";
import Post from "./Post";
import { UserContext } from "../store/List-Post";
const PostList = () => {
  const { postList } = useContext(UserContext);
  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default PostList;
