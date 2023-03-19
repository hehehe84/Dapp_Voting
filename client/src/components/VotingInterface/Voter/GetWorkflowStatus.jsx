import { Button } from '@chakra-ui/react';
import useEth from "../../../contexts/EthContext/useEth";
import { useState, useEffect } from 'react';

// {currentStatus}
function GetWorkflowStatus ({currentStatus, setCurrentStatus}) {
  const { state: { contract, accounts, artifact } } = useEth();


  // useEffect(() => {
  // }, [accounts, contract, artifact, currentStatus])
    async function getWorkflowStatus() {
      if (artifact) {
        const actualWorkflowStatus = await contract.methods.workflowStatus().call({ from: accounts[0] });
        setCurrentStatus = actualWorkflowStatus;
      }
    };
    getWorkflowStatus();

  return (
    <div>
        <Button colorScheme='teal' size='md' onClick={getWorkflowStatus}>
        WorkflowStatus: {currentStatus}
        </Button>

        <span>
            {currentStatus}
        </span>
      
    </div>
  );
}

export default GetWorkflowStatus;