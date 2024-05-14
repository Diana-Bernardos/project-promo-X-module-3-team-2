import Card from "./Card";
import "../styles/Preview.scss";
import Profile from "./Profile";
import ebook from '../images/ebook-example.jpg';

const Preview = ({projectData}) => {

   
  return (
    <section className="preview">
        <Profile avatar={projectData.image} scssClass="projectImage" defaultImg={ebook}/>
        {/* <div className="projectImage" style={`background-image: {projectData.image}`}></div> */}
        <Card props={projectData}/>
    </section>
  )
}

export default Preview