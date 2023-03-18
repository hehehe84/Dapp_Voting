import { Button, WrapItem } from '@chakra-ui/react'
import useEth from "../../../contexts/EthContext/useEth"
import { useState } from 'react';

function AddProposal(proposals, setProposals) {
  const { state: { contract, accounts } } = useEth();
  const [newProposal, setNewProposal] = useState("");
  
  const handleInputChange = (e) => {
    setProposals(e.target.value);
  };

  const addproposal = async () =>{
    if (newProposal !== "") {
      await contract.methods.addProposal().send({ from: accounts[0] });
      setNewProposal("");
      setProposals([...proposals, newProposal]);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="proposal"
          value={newProposal}
          onChange={handleInputChange}
        />
      </div>
        <WrapItem>
          <Button colorScheme='teal' size='md' onClick={addproposal}><span>Add Proposal</span></Button>  
        </WrapItem>
    </div>
  );
}
export default AddProposal;