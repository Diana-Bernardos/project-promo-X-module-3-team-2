import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';

import {useEffect, useState} from 'react';
import "../styles/Main.scss";
// Importamos el servicio del local storage
import ls from '../services/localStorage';
import postData from '../services/postData';


const Main = () => {

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
    <main className="main">
      <Hero/>
      <Preview projectData={data}/>
      <Form getInput={getInput} updateAvatar={updateAvatar} data={data} addNewProject={addNewProject}/>
    </main>
  )
}

export default Main