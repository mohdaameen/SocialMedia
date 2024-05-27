import { createContext, useReducer } from "react";

export const UserContext = createContext({
  postList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

function ListProvider({ children }) {
  const [postList, DispatchpostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (VuserID, Vtitle, Vbody, Vreactions, Vtags) => {
    DispatchpostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: Vtitle,
        body: Vbody,
        reactions: Vreactions,
        userID: VuserID,
        tags: Vtags,
      },
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
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </UserContext.Provider>
  );
}

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai, I will enjoy alot",
    reactions: 2,
    userID: "u12",
    tags: ["Vacations", "Mumbai", "Fun"],
  },
  {
    id: "2",
    title: "Going to give Exam",
    body: "Hi Friends, I am going to give exams, I will enjoy alot",
    reactions: 13,
    userID: "u13",
    tags: ["Vacations", "Mumbai", "Fun"],
  },
];

export default ListProvider;
