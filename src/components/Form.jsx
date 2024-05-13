import "../styles/Form.scss";
import GetAvatar from "./GetAvatar";

const Form = (props) => {

  const handleChange =(ev)=>{
    const id = ev.target.id;
    const value = ev.target.value;

    props.getInput(id, value);
  }


  return (
    <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleChange} maxLength='25'/>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChange} maxLength='30'/>
          <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChange}/>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChange}/>
          </div>         
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChange} maxLength='30'/>
          <textarea className="addForm__input textarea" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChange}></textarea>
        </fieldset>
    
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChange}/>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChange}/>
        </fieldset>
    
        <fieldset className="addForm__group--upload">
          <GetAvatar text="Subir foto del proyecto" updateAvatar={props.updateAvatar}/>

          {/* <GetAvatar text="Subir foto de la autora" updateAvatar={props.updateAvatar}/> */}

          {/* <label htmlFor="image" className="button">Subir foto del proyecto</label>
          <input className="addForm__hidden" type="file" name="image" id="image"/>
          <label htmlFor="photo" className="button">Subir foto de la autora</label>
          <input className="addForm__hidden" type="file" name="photo" id="photo"/>
          <button className="button--large">Guardar proyecto</button> */}
        </fieldset>  
      </form>
  )
}

export default Form