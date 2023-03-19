
import { useState } from 'react';
import useEth from "../../contexts/EthContext/useEth";
import { Button } from '@chakra-ui/react';

function AddVoter({currentStatus}) {
  const { state: { contract, accounts } } = useEth();
  const [voterAddr, setVoterAddr] = useState("");
  
  const handleInputChange = (e) => {
    setVoterAddr(e.target.value);
  };

  async function addVoter() {
      try {
        await contract.methods.addVoter(voterAddr).send({from: accounts[0]});
        alert("Voter add Successfully");
        setVoterAddr("");
      } catch(error) {
        alert("Error in adding Voter");
      }
  };
  
  return (
      <div>
        {currentStatus === "0" && (
          <div>
            <input
              type="text"
              placeholder="proposal"
              value={voterAddr}
              onChange={handleInputChange}
            />
            <Button colorScheme='teal' size='md' onClick={addVoter}>
              AddVoter:
            </Button>
          </div>
            
        )}
      </div>
  );
}

export default AddVoter;