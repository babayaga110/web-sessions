import React from "react";
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";


function App() {
  return (
 <div>
    <Navbar />
    <Header />
    <Main/>
    <Footer />
 </div>
  );
}

export default App;
