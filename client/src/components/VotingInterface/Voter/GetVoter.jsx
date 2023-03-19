import { Button, WrapItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import useEth from '../../../contexts/EthContext/useEth';

function GetVoter({voters, setVoters}) {
  const { state: { contract, accounts, artifact }} = useEth();

  const Voter = {}

  useEffect(() => {
    async function getVoters() {
        if (artifact) {
            const VoterRegistered = await contract.getPastEvents('VoterRegistered', {fromBlock: 0, toBlock: "latest"});
            let VoterAddr = VoterRegistered.map((voter) => voter.returnValues._voterAddress)
            setVoters(VoterAddr)
        }
    }
    getVoters();
  }, [accounts, contract, artifact])

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="proposalId"
          value={inputId}
          onChange={handleInputChange}
        />
      </div>
        <WrapItem>
          <Button colorScheme='teal' size='md' onClick={getOneProposal}><span>Get Proposal</span></Button>  
        </WrapItem>
    </div>
  );
}

export default GetVoter;