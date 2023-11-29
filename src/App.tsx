import "./App.css";
import { TextEditor } from "./components/TextEditor/TextEditor.tsx";

function App() {
  return (
    <div className='appContainer'>
      <h3 className='title'>Draft Docs</h3>
      <TextEditor />
    </div>
  );
}

export default App;
