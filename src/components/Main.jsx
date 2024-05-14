import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';
import { useState } from 'react';
import "../styles/Main.scss";


const Main = () => {

  

    const [data, setData] = useState({
        name: "", 
        slogan: "", 
        technologies: "", 
        repo: "", 
        demo: "", 
        desc: "", 
        autor: "", 
        job: "", 
        image: "", 
        photo: ""
      }
    );

 
    const updateAvatar = (id, avatar) => {
      console.log(id);
      setData({...data, [id]: avatar});
    };
    
    const getInput = (id, value)=>{
        setData({...data, [id]: value});
    }
    
    console.log(data);

  return (
    <main className="main">
      <Hero/>
      <Preview projectData={data}/>
      <Form getInput={getInput} updateAvatar={updateAvatar}/>
    </main>
  )
}

export default Main