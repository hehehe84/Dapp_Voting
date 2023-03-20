import { useState, useEffect } from "react";
import { useEth } from "../../contexts/EthContext";
import { Button } from "@chakra-ui/react";

function Winner({ currentStatus, setWinner }) {
  const { state: { accounts, contract, artifact }} = useEth();

  async function getWinner() {
    if (contract) {
      const winnerId = await contract.methods.winningProposalID().call({ from: accounts[0] });
      const winnerProposal = await contract.methods.getOneProposal(parseInt(winnerId)).call({ from: accounts[0] });
      console.log(winnerProposal);
      setWinner(winnerProposal);
    }
  };

  return (

    <div>
      {(currentStatus === 1) ? (
                  <Button colorScheme='teal' size='md' onClick={getWinner}>
                    Get Proposal
                  </Button>    
              ) : (
                <Button colorScheme='red' size='md' onClick={() => alert ('You cannot add any proposals at that time.')}>
                  Get Proposal
                </Button>  
          )}
    </div>
  );
}

export default Winner;