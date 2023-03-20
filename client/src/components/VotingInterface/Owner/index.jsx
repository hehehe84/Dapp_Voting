import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import AddVoter from "./AddVoter";
import IsOwner from "./IsOwner";
import GestionStatus from "./GestionStatus";



function Owner({currentStatus, setCurrentStatus, status}) {
  const [isOwner, setIsOwner] = useState('');
  const [voterAddr, setVoterAddr] = useState('');

  const ownerInterface =
  <div>
    <div>
      <IsOwner isOwner={isOwner} setIsOwner={setIsOwner} voterAddr={voterAddr} setVoterAddr={setVoterAddr}/>
      <br/>
    </div>

    <div>
      <AddVoter isOwner={isOwner} currentStatus={currentStatus} voterAddr={voterAddr} setVoterAddr={setVoterAddr}/>
    </div>
    <br/>

    <div>
      <GestionStatus isOwner={isOwner} currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status}  />
    </div>

  </div>;



return (
    <div>
      {ownerInterface}
    </div>
  
);
}

export default Owner;