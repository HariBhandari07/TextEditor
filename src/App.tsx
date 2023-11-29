import "./App.css";
import { TextEditor } from "./components/TextEditor/TextEditor.tsx";
import { ProjectDescription } from "./components/ProjectDescription/ProjectDescription.tsx";

function App() {
  return (
    <div className='appContainer'>
      <h3 className='title'>Draft Docs By Hari Bhandari</h3>
      <div style={{width: '100%'}}>
        <TextEditor />
        <ProjectDescription />
      </div>
    </div>
  );
}

export default App;
