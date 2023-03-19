import { Button, ButtonGroup } from '@chakra-ui/react'

import { useState } from 'react';
import useEth from "../../contexts/EthContext/useEth";

function AddVoter(voter) {
  const { state: { contract, accounts, web3 } } = useEth();
  const [voter, setVoter] = useState('');
  
  const handleInputChange = (e) => {
    setVoter(e.target.value);
  };

  async function addVoter() {
    if (web3.utils.isAddress(voter)) {
        await contract.methods.addVoter(voter).call({ from: accounts[0] });
        await contract.methods.addVoter(voter).send({ from: accounts[0] });
        setVoter(voter);    
  };
}
  return (
    <div>
        <input
          type="text"
          placeholder="Voter Address"
          value={voter}
          onChange={handleInputChange}
        />
        <button onClick={addVoter}>Add Voter</button>  
    </div>
  );
}

export default AddVoter;