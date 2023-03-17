import { EthProvider } from "./contexts/EthContext";

import { ChakraProvider } from '@chakra-ui/react'


function Voter() {
  return (
    <ChakraProvider>
      <EthProvider>
        <div id="App">
          
        </div>
      </EthProvider>
    </ChakraProvider>
  );
}

export default Voter;