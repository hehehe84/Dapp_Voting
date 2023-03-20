import { Flex, Spacer } from "@chakra-ui/react";
import Address from "../Address";
import GetWorkflowStatus from "./GetWorkflowStatus";



function CommonUI({currentStatus, setCurrentStatus, status}) {
  return (
    <Flex justifyContent >
        <div>
            <Address />
        </div>
        <Spacer />
        <div>
            <GetWorkflowStatus currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} />
        </div>
    </Flex>
  );
}

export default CommonUI;