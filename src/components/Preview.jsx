import Card from "./Card";
import "../styles/Preview.scss";

const Preview = ({projectData}) => {

   
  return (
    <section className="preview">
        <div className="projectImage"></div>
        <Card props={projectData}/>
      </section>
  )
}

export default Preview