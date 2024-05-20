//import postData from "../services/postData"

const Button = ({data, postData, addNewProject}) => {

    const handleClick = (ev) => {
        ev.preventDefault()
        postData(data)
        addNewProject()
    }

  return (
    <button className="button--large" onClick={handleClick}>Guardar proyecto</button>
  )
}

export default Button