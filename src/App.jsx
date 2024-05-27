import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { CreatePost } from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import ListProvider from "./store/List-Post";
function App() {
  const [selectedTab, SetselectedTab] = useState("Post");
  return (
    <ListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          SetselectedTab={SetselectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab == "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </ListProvider>
  );
}
export default App;
