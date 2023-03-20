import { Flex, Spacer, Box } from "@chakra-ui/react";
import Address from "../Address";
import GetWorkflowStatus from "./GetWorkflowStatus";



function CommonUI({currentStatus, setCurrentStatus, status}) {
  return (
    <>
      <Box bgColor={"#313338"} h="100px" textColor={"whiteAlpha.900"} >
        <Flex justifyContent paddingLeft={"20px"} paddingRight={"20px"} paddingTop={"10px"}>
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