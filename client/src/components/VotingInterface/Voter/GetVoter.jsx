import { useState, useEffect } from 'react';
import useEth from "../../../contexts/EthContext/useEth";
import { Button } from '@chakra-ui/react';

function GetVoter({isOwner, voterAddr, setVoterAddr}) {
  const { state: { artifact, contract, accounts, voterList } } = useEth();
  const [oldUsers, setOldUsers] = useState([]);
  
  const handleInputChange = (e) => {
    setVoterAddr(e.target.value);
  };

  useEffect(() => {
    async function getUsers() {
      if (artifact) {
        let oldUsers = await contract.getPastEvents("VoterRegistered", {fromBlock:0, toBlock: "latest"});
        oldUsers.forEach(event => {
          voterList.push(event.returnValues.voterAddress);
        });
        setOldUsers(voterList);
      }
    }
    getUsers();
  }, [accounts, contract, artifact]);
  
  return (
    <>
      <div>
        <Button colorScheme='teal' size='md' onClick={addVoter} disabled={!isOwner} >
        Add Voter
        </Button>        
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

export default GetVoter;
function GetVoter() {
  const { state: { contract, accounts, artifact }} = useEth();

  const [voters, setVoters] = useState([]);

  useEffect(() => {
    async function getVoters() {
        if (artifact) {
            const VoterRegistered = await contract.getPastEvents('VoterRegistered', {fromBlock: 0, toBlock: "latest"});
            let VoterAddr = VoterRegistered.map((voter) => voter.returnValues._voterAddress)
            setVoters(VoterAddr);
        }
    }
    getVoters();
  }, [accounts, contract, artifact])

  return (
    <div>
    </div>
  );
}

export default GetVoter;