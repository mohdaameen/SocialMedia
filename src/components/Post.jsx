import React from "react";
import { MdDelete } from "react-icons/md";
import { UserContext } from "../store/List-Post";
import { useContext } from "react";
const Post = ({ post }) => {
  const { deletePost } = useContext(UserContext);
  return (
    <div className="card" style={{ maxWidth: "45%", margin: "10px" }}>
      <span
        onClick={() => deletePost(post.id)}
        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      >
        <MdDelete />
        <span class="visually-hidden">unread messages</span>
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p class="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary tags" key={tag}>
            {tag}
          </span>
        ))}
        <div
          className="alert alert-success"
          style={{ margin: "7px -10px" }}
          role="alert"
        >
          {`Total number of reactions on your posts are ${post.reactions}`}
        </div>
      </div>
    </div>
  );
};

export default Post;
