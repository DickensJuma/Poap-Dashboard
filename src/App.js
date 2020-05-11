import React from "react";
import Header from './components/Header'
import SideNav from './components/sideNav/SideNav'
import Main from './components/Main'
import Footer from './components/Footer'

import "./App.css";

function App() {
  return (
    <div className="grid">
      <Header/>
     <SideNav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
