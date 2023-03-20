import { Flex, Spacer } from "@chakra-ui/react";
import AddProposal from "./AddProposal"
import SetVote from "./SetVote"


function Voter( {currentStatus, proposals, setProposals, proposalID, setProposalID, voterAddr} ) {
  const voterInterface =
  <>
  <br/><br/>
    <Flex>
      <div>
        <AddProposal currentStatus={currentStatus} proposals={proposals} setProposals={setProposals} proposalID={proposalID} setProposalID={setProposalID} />
      </div>
      <Spacer />
      <div>
        <SetVote currentStatus={currentStatus} />
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