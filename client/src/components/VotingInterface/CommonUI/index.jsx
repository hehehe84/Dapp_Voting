import { Flex, Spacer, Box } from "@chakra-ui/react";
import Address from "../Address";
import GetWorkflowStatus from "./GetWorkflowStatus";



function CommonUI({currentStatus, setCurrentStatus, status}) {
  return (
    <>
      <Box bgColor={"#313338"} h="100px" textColor={"#C6F6D5"} borderRadius={"20px"} >
        <Flex justifyContent paddingLeft={"50px"} paddingRight={"50px"} paddingTop={"20px"}>
            <div>
                <Address />
            </div>
            <Spacer />
            <div>
                <GetWorkflowStatus currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} />
            </div>
        </Flex>
      </Box>
      <hr/>
    </>
  );
}

export default CommonUI;