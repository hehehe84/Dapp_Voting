
//import { useState } from 'react';
import useEth from "../../../contexts/EthContext/useEth";
import { Button } from '@chakra-ui/react';

function AddVoter({isOwner, voterAddr, setVoterAddr}) {
  const { state: { contract, accounts } } = useEth();
  
  
  const handleInputChange = (e) => {
    setVoterAddr(e.target.value);
  };

  async function addVoter() {
    try {
      await contract.methods.addVoter(voterAddr).send({from: accounts[0]});
      alert("Voter added Successfully");
      setVoterAddr('');
    } catch(error) {
      alert("Error");
    }     
  };
  
  return (
    
      <div>
        <Button colorScheme='teal' size='md' onClick={addVoter} disabled={!isOwner} >
        Add Voter
        </Button>
          <input
              type="text"
              placeholder="Voter Address"
              value={voterAddr}
              onChange={handleInputChange}
            />
      </div>
  );
}

export default AddVoter;