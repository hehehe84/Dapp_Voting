import { EthProvider } from "./contexts/EthContext";
import Header from "./components/Header";
import Intro from "./components/Intro.jsx";
import Session from "./components/Session"
// import VotingInteface from "./components/VotingInterface/index";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <EthProvider>
        <div id="App">
          <div className="container">
            <Header/>
            <hr/>
            <Session />
            <hr/>
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