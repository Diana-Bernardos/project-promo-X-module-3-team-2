import Footer from "./Footer"
import Header from "./Header"
import HeroLanding from "./HeroLanding"
import ebook from '../images/ebook-example.jpg';
import { Link } from "react-router-dom";
import FakeCard from "./FakeCard";
import '../styles/Landing.scss'

const Landing = ({allProjects, data, cardURL}) => {

  // const landingCards = allProjects.map((project, i)=> <li key={i}><Card/></li>)
  

  return (
    <>
    <HeroLanding/>
    <section className="section_mockup">
      <FakeCard data={data} cardURL={cardURL} className="section_mockup-card"/>
      <FakeCard data={data} cardURL={cardURL} className="section_mockup-card"/>
      <FakeCard data={data} cardURL={cardURL} className="section_mockup-card"/>
      <FakeCard data={data} cardURL={cardURL} className="section_mockup-card"/>
    </section>
    </>
  )
}

export default Landing;