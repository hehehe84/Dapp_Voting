import { Button } from '@chakra-ui/react';
import useEth from "../../../contexts/EthContext/useEth";
import { useState, useEffect } from 'react';

// {currentStatus}
function GetWorkflowStatus ({currentStatus}) {
  const { state: { contract, accounts, artifact } } = useEth();
  const [workflowStatus, setWorkflowStatus] = useState("")

  async function getWorkflowStatus() {
    if (artifact) {
      const actualWorkflowStatus = await contract.methods.WorkflowStatus().call({ from: accounts[0] });
      setWorkflowStatus(actualWorkflowStatus);
    }
  };

  useEffect(() => {
    getWorkflowStatus();
  }, [accounts, contract, artifact, currentStatus])

  return (
    <div>
        <Button colorScheme='teal' size='md' onClick={getWorkflowStatus}>
        WorkflowStatus: {workflowStatus}
        </Button>

        <span>
            {workflowStatus}
        </span>
      
    </div>
  );
}

export default GetWorkflowStatus;