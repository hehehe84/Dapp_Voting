import { useState, } from "react";
import { Flex } from "@chakra-ui/react";
import AddVoter from "./AddVoter";
import IsOwner from "./IsOwner";
import GestionStatus from "./GestionStatus";



function Owner({currentStatus, setCurrentStatus, status}) {
  const [isOwner, setIsOwner] = useState(false);

  const ownerInterface =
  <div>
    <div>
      <IsOwner isOwner={isOwner} setIsOwner={setIsOwner} />
      <br/>
    </div>

    <div>
      <AddVoter currentStatus={currentStatus} />
    </div>

    <div>
      <GestionStatus currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} isOwner={isOwner} />
    </div>

  </div>;



return (
    <div>
      {ownerInterface}
    </div>
  
);
}

export default Owner;