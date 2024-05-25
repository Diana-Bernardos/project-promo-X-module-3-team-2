import "../styles/FakeCard.scss";
import Profile from "./Profile";
import avatar from'../images/avatar.webp';
import { useState, useRef } from "react";
import Web from '../images/icons/globe-solid.svg'
import Git from '../images/icons/github.svg'

const FakeCard = ({data}) => {

    const {name, slogan, technologies, repo, demo, desc, autor, job, image, photo} = data

    const Popup = ({handleClose}) =>{
      const modalRef = useRef(null);

      const closeWithAnimation = () => {
        if (modalRef.current){
          modalRef.current.classList.add("closing");
          setTimeout(()=>{
            modalRef.current.classList.remove("closing");
            handleClose();
          }, 300);
        }
      };
      return (
        <div ref={modalRef} className="graphpop">
          <div className="popup">
            <button onClick={closeWithAnimation} className="popup__button-close">X</button>
            <img src={image} alt="" className="popup__img"/>
            <h3 className="popup__name">{name}</h3>
            <p className="popup__slogan">{slogan}</p>
            <div className="popup__links">
              <a className="popup__links-linkweb" href={demo} title="Haz click para ver el proyecto online" target="_blank">
                <img src={Web} alt="" />
              </a>
              <a className="popup__links-linkrepo" href={repo} title="Haz click para ver el código del proyecto" target="_blank">
                <img src={Git} alt="" />
              </a>
            </div>
            <button className="popup__button-ver">Ver proyecto</button>
          </div>
        </div>
      );
    };

    const [visible, setVisible] = useState(false);

    const showPopup = () =>{
      setVisible(true)
    }

    const closePopup = () =>{
      setVisible(false)
    }

  return (
    <button onClick={showPopup}>
      {visible && <Popup handleClose={closePopup}/>}
      <article className="fakeCard">
            <h2 className="fakeCard__projectTitle"><span className="fakeCard__projectTitle--text">Proyecto Personal</span></h2>
            <div className="fakeCard__author">
              {/* <div className="fakeCard__authorPhoto"></div> */}
              <Profile scssClass="fakeCard__authorPhoto" avatar={photo} defaultImg={avatar}/>
              <p className="fakeCard__job">
                {job || "Full stack Developer"}
              </p>
              <h3 className="fakeCard__name--author">{autor || "Emmelie Bjôrklund"}</h3>
            </div>
      
            <div className="fakeCard__project">
              <h3 className="fakeCard__name">{name || "Elegant Workspace"}</h3>
              <p className="fakeCard__slogan">{slogan || "Diseños Exclusivos"}</p>
              <h3 className="fakeCard__descriptionTitle">Descripción del Producto</h3>
              <p className="fakeCard__description">{desc || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}</p>
              <div className="fakeCard__technicalInfo">
                <p className="fakeCard__technologies">{technologies || "React JS - HTML - CSS"}</p>
              </div>
            </div>
      </article>
    </button>
  )
}

export default FakeCard