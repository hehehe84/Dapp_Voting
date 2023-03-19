import { useEth } from "../../../contexts/EthContext";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import IsOwner from "./IsOwner";
import AddVoter from "./AddVoter";
import EndProposalRegistering from "./EndProposalRegistering";
import EndVotingSession from "./EndVotingSession";
import StartProposalRegistering from "./StartProposalRegistering";
import StartVotingSession from "./StartVotingSession";
import TallyVotes from "./TallyVotes";



function Owner(currentStatus, setCurrentStatus) {
  const {state : {accounts, contract, artifact}} = useEth();
  const [isOwner, setIsOwner] = useState(false);

  /*useEffect(() => {
    async function checkOwner() {
      const updateVal = await IsOwner(accounts, contract, artifact);
      setIsOwner(updateVal);
    }
    checkOwner();
  }, [accounts, contract, artifact]);*/

  const ownerInterface =
  <Flex>
    <div>
      <IsOwner isOwner={isOwner} setIsOwner={setIsOwner}  />
    </div>
    <div>
      <AddVoter  />
    </div>
    <div>
      <StartProposalRegistering currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} />
    </div>
      <EndProposalRegistering currentStatus={currentStatus} setCurrentStatus={setCurrentStatus}/>
    <div>
    </div>
      <StartVotingSession currentStatus={currentStatus} setCurrentStatus={setCurrentStatus}/>
    <div>
    </div>
      <EndVotingSession currentStatus={currentStatus} setCurrentStatus={setCurrentStatus}/>
    <div>
    </div>
      <TallyVotes currentStatus={currentStatus} setCurrentStatus={setCurrentStatus}/>
    <div>
    </div>
  </Flex>;



return (
    <div>
      {ownerInterface}
      <h3>Owner renwO</h3>
    </div>
  
);
}

export default Owner;