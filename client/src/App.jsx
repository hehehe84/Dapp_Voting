import { EthProvider } from "./contexts/EthContext";
// import Header from "./components/Header";
import Session from "./components/Session"
import Footer from "./components/Footer";
import { ChakraProvider } from '@chakra-ui/react'



function App() {

  return (
    <ChakraProvider>
      <EthProvider>
        <div id="App">
          <div className="container">
            {/* <Header/>
            <hr/> */}
            <br/>
            <Session />
            <hr/>
            <Footer />
          </div>
        </div>
      </EthProvider>
    </ChakraProvider>
  );
}

export default App;