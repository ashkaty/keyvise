import ShortCutList from "./components/shortcutList";
import KeyComponent from "./components/key";
import "./App.css";

function App() {

  return (
    <div>
      <ShortCutList/>
      <KeyComponent label="a" isPressed={false}/>
    </div>
  );
}

export default App;
