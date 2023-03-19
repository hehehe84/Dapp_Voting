import { Button } from '@chakra-ui/react';
import useEth from "../../../contexts/EthContext/useEth";
import { useState, useEffect } from 'react';

// {currentStatus}
function GetWorkflowStatus () {
  const { state: { contract, accounts } } = useEth();
  const [WorkflowStatus, setWorkflowStatus] = useState(null)

  const getWorkflowStatus = async () => {
    const WorkflowStatus = await contract.methods.WorkflowStatus().call({ from: accounts[0] });
    setWorkflowStatus(WorkflowStatus);
  };

  useEffect(() => {
    getWorkflowStatus();
  })

  return (

    <div>
        <Button colorScheme='teal' size='md' onClick={getWorkflowStatus} >
            WorkflowStatus :
        </Button>

        <span>
            {WorkflowStatus}
        </span>
      
    </div>
  );
}

export default GetWorkflowStatus;