import { Flex } from "@chakra-ui/react";
import AddProposal from "./AddProposal"
// import SetVote from "./SetVote"


function Voter( {currentStatus, setWinner, proposals, setProposals, proposalID, setProposalID, voterAddr} ) {
  const voterInterface =
  <>
    <Flex>
      <div>
        <AddProposal currentStatus={currentStatus} proposals={proposals} setProposals={setProposals} proposalID={proposalID} setProposalID={setProposalID} />
      </div>
      <div>
        {/* <SetVote proposals={proposals} setProposals={setProposals} currentStatus={currentStatus} setWinner={setWinner} /> */}
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