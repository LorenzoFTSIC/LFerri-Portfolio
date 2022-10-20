import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";


import Main from "./pages/main";
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
