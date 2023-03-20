import useEth from "../../../contexts/EthContext/useEth";
import { useEffect } from 'react';

// {currentStatus}
function GetWorkflowStatus ({currentStatus, setCurrentStatus, status}) {
  const { state: { contract, accounts, artifact } } = useEth();

  async function getWorkflowStatus() {
    if (artifact) {
      const workflowStatusIndex = await contract.methods.workflowStatus().call({ from: accounts[0] });
      setCurrentStatus(parseInt(workflowStatusIndex));
    }
  };


  useEffect(() => {
    getWorkflowStatus();
  }, [accounts, contract, artifact, currentStatus])
    

  return (
    <div>
        {`Current WorkflowStatus : `} <strong>{status[currentStatus]}</strong>
    </div>
  );
}

export default GetWorkflowStatus;