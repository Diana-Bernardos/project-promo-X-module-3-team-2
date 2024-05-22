import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';
import "../styles/Main.scss";




const Main = ({getInput, updateAvatar, data, addNewProject}) => {
  return (
    <main className="main">
      <Hero/>
      <Preview data={data}/>
      <Form getInput={getInput} updateAvatar={updateAvatar} data={data} addNewProject={addNewProject}/>
    </main>
  )
}

export default Main