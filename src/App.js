import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import './viewport.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import Default from './app/components/Default';
import MainBody from './app/components/MainBody';
import SideBar from './app/components/SideBar';
import Details from './app/components/Details';

function App() {
  
  return (
    <BrowserRouter>
      <Navigation/>
      <div className="mainBody">
            <div className='sideBar'>
                <SideBar/>
            </div>
            <div className='mainPage'>
              <Routes>
                <Route path="/" element={<MainBody />} />
                <Route path="/items/:id" element={<Details/>}></Route>
                <Route path="/*" element={<Default/>}/>
              </Routes>
            </div>
        </div>
          
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
