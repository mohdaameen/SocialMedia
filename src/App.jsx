import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";

import { useState } from "react";
import ListProvider from "./store/List-Post";
import { Outlet } from "react-router-dom";
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
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </ListProvider>
  );
}
export default App;
