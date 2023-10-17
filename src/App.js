import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './features/pageContent/sharedEle/Header';
import Nav from './features/pageContent/sharedEle/Nav';
import Main from './features/pageContent/Home/Home';
import Footer from './features/pageContent/sharedEle/Footer';
import WeightRecorder from './features/pageContent/WeightRecorder/WeightRecorder';
import Record from './features/pageContent/Record/Record';
import Study from './features/pageContent/Study/Study';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/WeightRecorder" element={<WeightRecorder />} />
        <Route path="/Record" element={<Record />} />
        <Route path="/Study" element={<Study />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
