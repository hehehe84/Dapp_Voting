import { useState, } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import AddVoter from "./AddVoter";
import IsOwner from "./IsOwner";
import GestionStatus from "./GestionStatus";



function Owner({currentStatus, setCurrentStatus, status, voterAddr, setVoterAddr}) {
  const [isOwner, setIsOwner] = useState('');

  const ownerInterface =
  <div>
    <Flex>
    <div>
      <IsOwner isOwner={isOwner} setIsOwner={setIsOwner} voterAddr={voterAddr} setVoterAddr={setVoterAddr} />
    </div>
    <Spacer />
    <div>
      <GestionStatus isOwner={isOwner} currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} />
    </div>
    </Flex>
    <br/>

    <div>
      <AddVoter isOwner={isOwner} currentStatus={currentStatus} voterAddr={voterAddr} setVoterAddr={setVoterAddr} />
    </div>
    <br/>

  </div>;



return (
    <div>
      {ownerInterface}
    </div>
  
);
}

export default Owner;