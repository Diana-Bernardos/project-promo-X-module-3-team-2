import Hero from './Hero';
import Preview from './Preview';
import Form from './Form';
import "../styles/Main.scss";




const Main = ({getInput, updateAvatar, data, addNewProject}) => {
  return (
    <>
    <Hero/>
    <main className="main">
      <Preview data={data}/>
      <Form getInput={getInput} updateAvatar={updateAvatar} data={data} addNewProject={addNewProject}/>
    </main>
    </>
  )
}

export default Main