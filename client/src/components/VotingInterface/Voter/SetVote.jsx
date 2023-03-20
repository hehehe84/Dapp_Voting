import { useState } from "react";
import { useEth } from "../../../contexts/EthContext";
import { Button } from "@chakra-ui/react";

function SetVote({ currentStatus }) {
    const { state: { accounts, contract }} = useEth();
    const [proposal, setProposal] = useState(0);

    const handleProposalChange = (e) => {
        if (/^\d+$|^$/.test(e.target.value)) {
            setProposal(e.target.value);
        }
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
                    Set Vote
                  </Button>    
              ) : (
                <Button colorScheme='red' size='md' onClick={() => alert ('You cannot vote at that time.')}>
                  Set Vote
                </Button>  
          )}
          </div>
        </>
    );
}
      
      
export default SetVote;