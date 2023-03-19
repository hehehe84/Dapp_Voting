import { Button, WrapItem } from '@chakra-ui/react'
import useEth from "../../../contexts/EthContext/useEth"
import { useState } from 'react';

function SetVote() {
  const { state: { contract, accounts } } = useEth();
  const [vote, setVote] = useState("");

  const handleChange = (e, data) => {
    setVote(data.value);
  };

  const voteForOneProposal = async () =>{
      await contract.methods.setVote(parseInt(vote)).send({ from: accounts[0] });
  };

  return (
      <div>
        <input
          type="text"
          placeholder="proposal"
          value={voteForOneProposal}
          onChange={handleChange}
        />
      </div>    
  );
}
export default SetVote;