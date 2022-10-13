import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Test from "./pages/test";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Test />} />
          </Routes>
        </div>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
