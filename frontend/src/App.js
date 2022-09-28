import React from  'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import AddDetails from './components/AddDetails';
import ViewDetails from './components/ViewDetails';

export default function App() {
    return (
      <div className="App">
      <Router>
  
        <Routes>
        <Route    path = "/" element = {<AddDetails/>}/> 
        <Route    path = "/View" element = {<ViewDetails/>}/> 
 
     </Routes>
  
  </Router>
  </div>
  );
  }