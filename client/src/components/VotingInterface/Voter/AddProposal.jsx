import { Button, WrapItem } from '@chakra-ui/react'
import { useState } from 'react';
import useEth from "../../contexts/EthContext/useEth";

function AddProposal() {
  const { state: { contract, accounts, web3 } } = useEth();
  const [proposal, setProposal] = useState('');
  
  const handleInputChange = (e) => {
    setProposal(e.target.value);
  };

  const addproposal = async () =>{
      await contract.methods.addProposal(proposal).call({ from: accounts[0] });
      await contract.methods.addProposal(proposal).send({ from: accounts[0] });
  }

  return (
    <div>
        <input
          type="text"
          placeholder="proposal"
          value={proposal}
          onChange={handleInputChange}
        />
        <WrapItem>
          <Button colorScheme='teal' size='md' onClick={addproposal}>Add Proposal</Button>  
        </WrapItem>
    </div>
  );
}
export default AddProposal;