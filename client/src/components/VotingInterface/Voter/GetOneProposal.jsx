import { Button, WrapItem } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import useEth from '../../../contexts/EthContext/useEth';


// useEffect(() => {
//   async function
// })
function GetOneProposal({ setProposals }) {
  const { state: { contract, accounts}} = useEth();
  const [inputId, setInputId]= useState("");

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputId(e.target.value);
    }
    setInputId(e.target.value);
  };

  const getOneProposal = async () => {
    const prop = await contract.methods.getOneProposal(inputId).call({from: accounts[0]});
    setProposals(prop);
  }

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

export default GetOneProposal;

  