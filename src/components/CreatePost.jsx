import React, { useContext, useRef } from "react";
import { UserContext } from "../store/List-Post";

export const CreatePost = () => {
  const { addPost } = useContext(UserContext);

  const userId = useRef();
  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const VuserID = userId.current.value;
    const Vtitle = title.current.value;
    const Vbody = body.current.value;
    const Vreactions = reactions.current.value;
    const Vtags = tags.current.value.split(" ");

    userId.current.value = "";
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: Vtitle,
        body: Vbody,
        reactions: Vreactions,
        userId: VuserID,
        tags: Vtags,
      }),
    })
      .then((res) => res.json())
      .then((resOb) => addPost(resOb));
  };
  return (
    <form className="postForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserID" className="form-label">
          Enter your userID
        </label>
        <input
          placeholder="userID"
          type="text"
          className="form-control"
          id="userid"
          ref={userId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTile" className="form-label">
          Post Title
        </label>
        <input
          placeholder="How is your day going?.."
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          ref={title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Description
        </label>
        <textarea
          rows={3}
          type="text"
          className="form-control"
          id="Body"
          placeholder="Tell us about it..."
          ref={body}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="postreaction"
          ref={reactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTile" className="form-label">
          HashTags
        </label>
        <textarea
          type="text"
          className="form-control"
          id="hashtags"
          ref={tags}
        />
      </div>

      <button type="submit" className="btn btn-primary postButton">
        Post
      </button>
    </form>
  );
};
