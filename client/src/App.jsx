import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";


function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <votingInstance />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
