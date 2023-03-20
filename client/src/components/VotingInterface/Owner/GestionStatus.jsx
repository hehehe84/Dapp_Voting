import useEth from "../../contexts/EthContext/useEth"
import { Button } from "@chakra-ui/react";

function GestionStatus({ currentStatus, setCurrentStatus, status, isOwner }) {
  const { state: { contract, accounts } } = useEth();

  const changeStatus = async () => {
    console.log(currentStatus);
    switch (currentStatus) {
      case 0:
        await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
        setCurrentStatus(1);
        break;
      case 1:
        await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
        setCurrentStatus(2);
        break;
      case 2:
        await contract.methods.startVotingSession().send({ from: accounts[0] });
        setCurrentStatus(3);
        break;
      case 3:
        await contract.methods.endVotingSession().send({ from: accounts[0] });
        setCurrentStatus(4);
        break;
      case 4:
        setCurrentStatus(5);
        break;
      case 5:
        setCurrentStatus(0);
        break;
      default:
        setCurrentStatus(0);
        break;
    }
  };

  return (
    <div>
      <Button colorScheme='teal' size='md' onClick={changeStatus}>
        Next WorkflowStatus
      </Button>
    {/* {status.map((state, i) => {
      if (i === currentStatus + 1) {
        return (
          <Button key={state} colorScheme='teal' size='md' onClick={changeStatus} disabled={!isOwner}>
            {state}
          </Button>
        );
      } else {
        return null;
      }
    })} */}
  </div>
  );
}
export default GestionStatus;