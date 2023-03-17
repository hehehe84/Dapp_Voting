import { EthProvider } from "./contexts/EthContext";

import { ChakraProvider } from '@chakra-ui/react'


function Owner() {
  return (
    <ChakraProvider>
      <EthProvider>
        <div id="App">
          
        </div>
      </EthProvider>
    </ChakraProvider>
  );
}

export default Owner;