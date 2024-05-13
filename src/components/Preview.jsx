import Card from "./Card";
import "../styles/Preview.scss";
import Profile from "./Profile";

const Preview = ({projectData}) => {

   
  return (
    <section className="preview">
        <Profile avatar={projectData.image}/>
        {/* <div className="projectImage" style={`background-image: {projectData.image}`}></div> */}
        <Card props={projectData}/>
    </section>
  )
}

export default Preview