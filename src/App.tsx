import ShortCutList from "./components/shortcutList";
import Keyboard from "./components/keyboard";
import "./App.css";

function App() {

  return (
    <div>
      <div className="keyboardContainer">
        <Keyboard/>
      </div>
      <div>
        <ShortCutList/>
      </div>
    </div>
  );
}

export default App;
