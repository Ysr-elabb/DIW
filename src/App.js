import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'
import './App.css'
function App() {
  return (
    <div className="App d-flex flex-row">
     <Navbar/>
     <Sidebar/>
     <MainContent/>
    </div>
  );
}

export default App;
