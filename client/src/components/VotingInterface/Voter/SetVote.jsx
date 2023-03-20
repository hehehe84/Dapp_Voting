import { useState } from "react";
import { useEth } from "../../../contexts/EthContext";
import { Button } from "@chakra-ui/react";

function SetVote({ currentStatus, setWinner }) {
    const { state: { accounts, contract }} = useEth();
    const [proposal, setProposal] = useState(0);

    const handleProposalChange = (e) => {
        setProposal(e);
      };
    
  
const addrVote = async () => {
    await contract.methods.setVote(parseInt(proposal)).send({ from: accounts[0] });
    window.location.reload();
};

    return (
        <>
            <div>
            
            <input
                type="number"
                placeholder="VoteId"
                value={proposal}
                onChange={handleProposalChange}
            />
            
            </div>
            <br/>
            <div>
            {(currentStatus === 3) ? (
                  <Button colorScheme='teal' size='md' onClick={addrVote}>
                    Get Proposal
                  </Button>    
              ) : (
                <Button colorScheme='red' size='md' onClick={() => alert ('You cannot add any proposals at that time.')}>
                  Get Proposal
                </Button>  
          )}
          </div>
            <br/>
        </>
    );
}
      
      
export default SetVote;