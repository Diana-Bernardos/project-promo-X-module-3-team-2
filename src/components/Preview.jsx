import Card from "./Card"

const Preview = ({projectData}) => {

   
  return (
    <section className="preview">
        <div className="projectImage"></div>
        <Card props={projectData}/>
      </section>
  )
}

export default Preview