import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';
import { useState } from 'react';


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
    
    const getInput = (id, value)=>{
        setData({...data, [id]: value});
    }
    

  return (
    <main className="main">
      <Hero/>
      <Preview projectData={data}/>
      <Form getInput={getInput}/>
    </main>
  )
}

export default Main