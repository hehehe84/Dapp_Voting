import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/intro.jsx";


function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Intro />
          <hr/>
          <votingInstance />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
