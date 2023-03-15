import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/intro.jsx";
// import VotingInteface from "./components/VotingInterface/index";


function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Intro />
          {/* <hr/>
          <VotingInterface /> */}
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
