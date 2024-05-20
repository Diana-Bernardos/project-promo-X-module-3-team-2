//import postData from "../services/postData"

const Button = ({data, postData}) => {

    const handleClick = (ev) => {
        ev.preventDefault()
        postData(data)

    }

  return (
    <button className="button--large" onClick={handleClick}>Guardar proyecto</button>
  )
}

export default Button