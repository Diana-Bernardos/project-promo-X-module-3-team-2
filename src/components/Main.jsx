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

    const [avatar, setAvatar] = useState('');
    const updateAvatar = (avatar) => {
      setAvatar(avatar);
      setData({...data, image: avatar});
    };

    const [imgProject, setImgProject] = useState('');
    // const updateAvatar = (imgProject) => {
    //   setImgProject(imgProject);
    // };
    
    const getInput = (id, value)=>{
        setData({...data, [id]: value});
    }
    
    console.log(data);

  return (
    <main className="main">
      <Hero/>
      <Preview projectData={data} avatar={avatar}/>
      <Form getInput={getInput} updateAvatar={updateAvatar}/>
    </main>
  )
}

export default Main