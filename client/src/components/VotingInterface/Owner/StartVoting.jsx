import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../../contexts/EthContext/useEth";

function StartVotingSession(setCurrentStatus) {
  const { state: { contract, accounts } } = useEth();

  const VotingSessionStart = async () => {
  const status = await contract.methods.startVotingSession().send({ from: accounts[0] });
  setCurrentStatus(status);
  };

  return (
    <div className="startVote">
      <button onClick={VotingSessionStart}>
        Start Voting Session
      </button>
    </div>
  );
}

export default StartVotingSession;