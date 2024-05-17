// Fichero src/components/App.jsx
import '../styles/App.scss';


import ebook from '../images/ebook-example.jpg';
import Github from '../images/icons/github.svg';
import globe from '../images/icons/globe-solid.svg';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Landing from './Landing';


function App() {

  return (
    <div className="container">
      {/* <Landing /> */}
    <Header/>
    <Main/>
    <Footer/>

  </div>
  );
}

export default App;