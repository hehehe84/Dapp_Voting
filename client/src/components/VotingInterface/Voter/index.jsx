import { Flex } from "@chakra-ui/react";
import useEth from "../../../contexts/EthContext/useEth";
import AddProposal from "./AddProposal"


function Voter( {setWinner, proposals, setProposals, proposalID, setProposalID, voterAddr} ) {
  const { state: { contract, accounts } } = useEth();
  
  const voterInterface =
  <>
    <Flex>
      <div>
        <AddProposal proposals={proposals} setProposals={setProposals} proposalID={proposalID} setProposalID={setProposalID} />
      </div>
      <div>
        
      </div>
    </Flex>
    <br/>
  </>;


  
  return (
      <div>
        {voterInterface}
      </div> 
  );
}

export default Voter;