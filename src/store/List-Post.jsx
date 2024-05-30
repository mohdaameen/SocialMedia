import { createContext, useReducer } from "react";

export const UserContext = createContext({
  postList: [],
  AddPost: () => {},
  DeletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

function ListProvider({ children }) {
  const [postList, DispatchpostList] = useReducer(postListReducer, []);

  const addPost = (obj) => {
    DispatchpostList({
      type: "ADD_POST",
      payload: obj,
    });
  };

  const addInitialPosts = (posts) => {
    DispatchpostList({
      type: "ADD_INITIAL_POST",
      payload: { posts },
    });
  };

  const deletePost = (postid) => {
    DispatchpostList({
      type: "DELETE_POST",
      payload: { postid },
    });
  };

  return (
    <UserContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts: addInitialPosts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default ListProvider;
