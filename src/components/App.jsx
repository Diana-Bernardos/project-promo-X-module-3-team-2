// Fichero src/components/App.jsx
import '../styles/App.scss';
import ebook from '../images/ebook-example.jpg';
import Github from '../images/icons/github.svg';
import globe from '../images/icons/globe-solid.svg';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Route, Routes } from 'react-router';
import Landing from './Landing';
import {useEffect, useState} from 'react';
// Importamos el servicio del local storage
import ls from '../services/localStorage';
import postData from '../services/postData';

function App() {

    // Obtenemos el nombre del local storage
    // Si hay datos en el local storage esta función los devolverá
    // Si no hay datos en el local storage esta función devolverá el segundo parámetro, es decir, un string vacío
    const localStorageData = ls.get('data', {
      name: '',
      slogan: '',
      technologies: '',
      repo: '',
      demo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: ''
  });

  const [data, setData] = useState(localStorageData);

  const [allProjects, setAllProjects] = useState([]);

  const addNewProject = ()=> {
    setAllProjects([...allProjects, data])
  }

  useEffect(() => {
      // Guardamos data en el local storage
      ls.set('data', data);
  }, [data]);


//FIX THIS!!!!!!!!!!
//   useEffect(() => {
//     // Guardamos allProjects en el local storage
//     ls.set('allProjects', allProjects);
// }, [allProjects]);

  const updateAvatar = (id, avatar) => {
      console.log(id);
      setData({...data, [id]: avatar});
  };
  
  const getInput = (id, value)=>{
      setData({...data, [id]: value});
  }

  console.log(postData);

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Landing allProjects={allProjects} data={data}/>}/>
        <Route path='/createproject' element={<Main getInput={getInput} updateAvatar={updateAvatar} data={data} addNewProject={addNewProject}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;