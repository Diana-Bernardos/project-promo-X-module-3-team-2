import Footer from "./Footer"
import Header from "./Header"
import ebook from '../images/ebook-example.jpg';
import { Link } from "react-router-dom";
import Card from "./Card";

const Landing = ({allProjects}) => {

  const landingCards = allProjects.map((project, i)=> <li key={i}><Card/></li>)
  

  return (
    <>
    <Link to="/createproject" className="button--link">Nuevo Proyecto</Link>
    <ul>
      
    </ul>
    </>
  )
}

export default Landing;