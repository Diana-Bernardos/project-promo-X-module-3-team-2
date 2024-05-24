import Footer from "./Footer"
import Header from "./Header"
import ebook from '../images/ebook-example.jpg';
import { Link } from "react-router-dom";
import FakeCard from "./FakeCard";
import '../styles/Landing.scss'

const Landing = ({allProjects, data}) => {

  // const landingCards = allProjects.map((project, i)=> <li key={i}><Card/></li>)
  

  return (
    <>
    <Link to="/createproject" className="button--link">Nuevo Proyecto</Link>
    <section className="section_mockup">
      <FakeCard data={data} className="section_mockup-card"/>
      <FakeCard data={data} className="section_mockup-card"/>
      <FakeCard data={data} className="section_mockup-card"/>
      <FakeCard data={data} className="section_mockup-card"/>
    </section>
    </>
  )
}

export default Landing;