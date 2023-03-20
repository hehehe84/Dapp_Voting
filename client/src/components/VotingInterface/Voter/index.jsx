import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import useEth from "../../../contexts/EthContext/useEth";
import AddProposal from "./AddProposal"
import GetOneProposal from "./GetOneProposal";
// import GetVoter from "./GetVoter";
import GetWorkflowStatus from "./GetWorkflowStatus";


function Voter( {currentStatus, setCurrentStatus, status, setWinner, proposals, setProposals, proposalID, setProposalID, voters} ) {
  const { state: { contract, accounts } } = useEth();
  
  const voterInterface =
  <>
    <Flex>
      <div>
        <AddProposal proposals={proposals} setProposals={setProposals} proposalID={proposalID} setProposalID={setProposalID} />
      </div>
      <div>
        <GetOneProposal contract={contract} accounts={accounts} />
      </div>
    </Flex>
    <br/>
    <Flex>
      <div>
        <GetWorkflowStatus currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} />
      </div>
    </Flex>
    <div>
        {/* <GetVoter /> */}
    </div>
  </>;


  
  return (
      <div>
        {voterInterface}
      </div>
    
  );
}

export default Voter;