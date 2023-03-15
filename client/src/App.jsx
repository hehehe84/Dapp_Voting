import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/intro.jsx";
// import VotingInteface from "./components/VotingInterface/index";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <EthProvider>
        <div id="App">
          <div className="container">
            <Intro />
            {/* <hr/>
            <VotingInterface /> */}
          </div>
        </div>
      </EthProvider>
    </ChakraProvider>
  );
}

export default App;
