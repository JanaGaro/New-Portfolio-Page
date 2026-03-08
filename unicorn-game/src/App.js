import Routes from "./Routes/Routes";
import "./App.css";
import GameContextProvider from "./Context/GameContextProvider";
import MoveContextProvider from "./Context/MoveContextProvider";
import AudioContextProvider from "./Context/AudioContextProvider";

function App() {
  return (
    <div className="App ">
      <GameContextProvider>
        <AudioContextProvider>
          <MoveContextProvider>
            <Routes />
          </MoveContextProvider>
        </AudioContextProvider>
      </GameContextProvider>
    </div>
  );
}

export default App;
