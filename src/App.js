//imports
import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import './style/styling.css';

//pages
import MainPage from './pages/MainPage';
import ResourcesPage from './pages/ResourcesPage';
import Donations from './pages/Donations';
import BackgroundPage from "./pages/BackgroundPage";
import ProgramsScholarships from "./pages/ProgramsScholarships";

//components
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route path="/resources" element={<ResourcesPage/>}/>
          <Route path="/programs" element={<ProgramsScholarships/>}/>
          <Route path="/background" element={<BackgroundPage/>}/>
          <Route path="/donations" element={<Donations/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
