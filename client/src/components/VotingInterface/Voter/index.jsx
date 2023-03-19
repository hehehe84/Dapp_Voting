import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import useEth from "../../../contexts/EthContext/useEth";
import AddProposal from "./AddProposal"
import GetOneProposal from "./GetOneProposal";
import GetVoter from "./GetVoter";


function Voter() {
  const { state: { contract, accounts } } = useEth();
  const [proposals, setProposals] = useState([]);
  const [voters, setVoters] = useState([]);

  const voterInterface =
    <Flex>
      <div>
        <AddProposal proposals={proposals} setProposals={setProposals} />
      </div>
      <div>
        <GetOneProposal contract={contract} accounts={accounts} />
      </div>
      <div>
        {/* <GetVoter voters={voters} setVoters={setVoters} /> */}
      </div>
    </Flex>;


  
  return (
      <div>
        {voterInterface}
      </div>
    
  );
}

export default Voter;