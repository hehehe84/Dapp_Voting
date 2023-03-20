import { useEth } from "../../../contexts/EthContext";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import IsOwner from "./IsOwner";
import GestionStatus from "./GestionStatus";



function Owner({currentStatus, setCurrentStatus, status}) {
  const {state : {accounts, contract, artifact}} = useEth();
  const [isOwner, setIsOwner] = useState(false);

  const ownerInterface =
  <Flex>
    <div>
      <IsOwner isOwner={isOwner} setIsOwner={setIsOwner} />
      <p>IsOwner</p>
    </div>

    <div>
      {/* <AddVoter  /> */}
    </div>

    <div>
      <GestionStatus currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} isOwner={isOwner} />
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