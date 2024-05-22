// Fichero src/components/App.jsx
import '../styles/App.scss';


import ebook from '../images/ebook-example.jpg';
import Github from '../images/icons/github.svg';
import globe from '../images/icons/globe-solid.svg';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Route, Routes } from 'react-router';
import Landing from './Landing';

function App() {

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='./' element={<Landing/>}/>
        <Route path='./createproject' element={<Main/>}/>
      </Routes>
      <Footer/>

  </div>
  );
}

export default App;