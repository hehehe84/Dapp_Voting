import { useState, useEffect } from 'react';
import useEth from "../../../contexts/EthContext/useEth";
import { Button } from '@chakra-ui/react';

function AddVoter({isOwner, voterAddr, setVoterAddr}) {
  const { state: { artifact, contract, accounts, voterList } } = useEth();
  const [oldUsers, setOldUsers] = useState([]);
  
  const handleInputChange = (e) => {
    setVoterAddr(e.target.value);
  };

  async function addVoter() {
    try {
      await contract.methods.addVoter(voterAddr).send({from: accounts[0]});
      alert("Voter added Successfully");
      setVoterAddr('');
    } catch(error) {
      alert("Error, Address is not Valid !");
      setVoterAddr('');
    }     
  };

  let oldies = [];
  useEffect(() => {
    async function getUsers() {
      if (artifact) {
        let oldUsers = await contract.getPastEvents("VoterRegistered", {fromBlock:0, toBlock: "latest"});
        oldUsers.forEach(event => {
          voterList.push(event.returnValues.voterAddress);
          oldies.push(event.returnValues.voterAddress);
        });
        setOldUsers(oldies);
      }
    }
    getUsers();
  }, [accounts, contract, artifact]);
  
  return (
    <>
      <div>
      {isOwner ? (
        <Button colorScheme='teal' size='md' onClick={addVoter} disabled={!isOwner} >
        Add Voter
        </Button>
      ) : (
        <Button colorScheme='red' size='md' onClick={() => alert ('Only the owner can change the status.')} >
        Add Voter
        </Button>
      )}
        
          <input
              type="text"
              placeholder=" Voter Address"
              value={voterAddr}
              onChange={handleInputChange}
            />
      </div>
      <hr/>
      <div>
        <h3>Voter List :</h3>
        <ol>
          {oldUsers &&
          oldUsers.map((event, i) =>
          <li key={i}>Voter: {event}</li>)}
        </ol>
      </div>
    </>
  );
}

export default AddVoter;