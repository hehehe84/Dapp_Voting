import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/intro.jsx";
import VotingInterface from "./components/VotingInterface/index";
import Header from "./components/Demo/Header";



function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Header />
          <br/>
          <Intro />
          <hr/>
          <VotingInterface />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
