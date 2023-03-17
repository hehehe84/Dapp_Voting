import { Button, ButtonGroup } from '@chakra-ui/react'

import { useState } from 'react';
import useEth from "../../contexts/EthContext/useEth";

function Proposal() {
  const { state: { contract, accounts } } = useEth();
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
        <button onClick={addproposal}>Add Proposal</button>  
    </div>
  );
}
export default Proposal;