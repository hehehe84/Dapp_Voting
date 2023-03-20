import { useState, useEffect } from "react";
import { useEth } from "../../contexts/EthContext";
import { Button } from "@chakra-ui/react";

function Winner({ currentStatus, setWinner }) {
  const { state: { accounts, contract, artifact }} = useEth();
  const [winProp, setWinProp] = useState([]);

  async function getWinnerProposal() {
    if (contract) {
      const winningProposalId = await contract.methods.winningProposalID().call({ from: accounts[0] });
      const winningProposal = await contract.methods.getOneProposal(parseInt(winningProposalId)).call({ from: accounts[0] });
      setWinProp(winningProposal);
    }
  };

  return (

    <div>
      {(currentStatus === 5) ? (
                <div>
                  <Button colorScheme='teal' size='md' onClick={getWinnerProposal}>
                    See winner
                  </Button>
                  <h4>The winning proposal is {winProp.description} !!! </h4>
                </div>    
              ) : (
                <div>
                  <Button colorScheme='red' size='md' onClick={() => alert ('You cannot add any proposals at that time.')}>
                    See Winner
                  </Button>  
                  <h4>You cannot cause the winner is not designed yet</h4>
                </div>
          )}
    </div>
  );
}

export default Winner;