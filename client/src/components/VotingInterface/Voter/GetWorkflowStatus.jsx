import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../../contexts/EthContext/useEth";

function getWorkflowStatus ({currentStatus}) {
  const { state: { contract, accounts } } = useEth();

  const getWorkflowStatus = async () => {
    const currentWorkflow = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setCurrentStatus(currentWorkflow);
  };

return (

    <div>
        <button onClick={getWorkflowStatus}>
            Get Workflow Status
        </button>

        <div className="currenStatus">
            Current Workflowstatus : {currentStatus}
        </div>
      
    </div>
)
}

export default getWorkflowStatus;