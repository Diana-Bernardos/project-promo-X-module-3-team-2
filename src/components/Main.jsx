import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';
import { useState } from 'react';
import "../styles/Main.scss";


const Main = () => {

    const initialDataState = () => {
        const localStorageData = JSON.parse(localStorage.getItem('data'))
        if (localStorageData) {
            return localStorageData;
        }

        return {
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
        };
    }

    const [data, setData] = useState(initialDataState());

 
    const updateAvatar = (id, avatar) => {
      console.log(id);
        const newAvatar = {...data, [id]: avatar};
        setData(newAvatar);
        localStorage.setItem('data', JSON.stringify(newAvatar));
    };
    
    const getInput = (id, value)=>{
        const newInput = {...data, [id]: value};
        setData(newInput);
        localStorage.setItem('data', JSON.stringify(newInput));
    }

    console.log(data);

  return (
    <main className="main">
      <Hero/>
      <Preview projectData={data}/>
      <Form getInput={getInput} updateAvatar={updateAvatar} data={data}/>
    </main>
  )
}

export default Main