import "../styles/Form.scss";
import GetAvatar from "./GetAvatar";
import PropTypes from "prop-types";
import { useState } from 'react';

const Form = (props) => {

  const [errorMsg, setErrorMsg] = useState({
    name: '',
    slogan: '',
    technologies: '',
    repo: '',
    demo: '',
    desc: '',
    autor: '',
    job: '',
  });


  const validateInput = (id, inputValue) => {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9._-]*)*\/?$/;

    if (inputValue === '') {
      setErrorMsg({...errorMsg, [id]: 'Por favor rellene este campo'})
    } else {
      setErrorMsg({...errorMsg, [id]: ''})
    }

    if (id === 'repo' || id === 'demo') {
      if (!urlPattern.test(inputValue)) {
        setErrorMsg({...errorMsg, [id]: 'Por favor introduce una url válida'});
      } else {
        setErrorMsg('');
        // Proceed with form submission or other logic
        console.log('Valid GitHub URL:', inputValue);
      }
    }
  };

  const handleChange =(ev)=>{
    const id = ev.target.id;
    const value = ev.target.value;
    props.getInput(id, value);
    validateInput(id, value);
  }


  return (
    <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleChange} maxLength='25' value={props.data.name} required/>
          <p className='error-msg'>{errorMsg.name}</p>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChange} maxLength='30'value={props.data.slogan} required/>
          <p className='error-msg'>{errorMsg.slogan}</p>

          <div className="addForm__2col">
            <div className="addForm__url">
              <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChange} value={props.data.repo} required/>
              <p className='error-msg'>{errorMsg.repo}</p>
            </div>
            <div className="addForm__url">
              <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChange} value={props.data.demo} required/>
              <p className='error-msg'>{errorMsg.demo}</p>
            </div>
          </div>

          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChange} maxLength='30' value={props.data.technologies} required/>
          <p className='error-msg'>{errorMsg.technologies}</p>
          <textarea className="addForm__input textarea" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChange}value={props.data.desc}></textarea>
          <p className='error-msg'>{errorMsg.desc}</p>
        </fieldset>
    
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChange} value={props.data.autor} required/>
          <p className='error-msg'>{errorMsg.autor}</p>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChange} value={props.data.job} required/>
          <p className='error-msg'>{errorMsg.job}</p>
        </fieldset>
    
        <fieldset className="addForm__group--upload">
          <GetAvatar id="image" text="Subir foto del proyecto" updateAvatar={props.updateAvatar}/>

          <GetAvatar id="photo" text="Subir foto de la autora" updateAvatar={props.updateAvatar}/>
        </fieldset>
      </form>
  )
}

Form.propTypes = {
  getInput: PropTypes.func,
  data: PropTypes.object,
  updateAvatar: PropTypes.func,
};

export default Form