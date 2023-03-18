import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../contexts/useEth";

function StartVotingSession() {
  const { state: { contract, accounts } } = useEth();

  const VotingSessionStart = async () => {
    await contract.methods.startVotingSession().send({ from: accounts[0] });
  };

  return (
    <div className="startVote">
      <button onClick={VotingSessionStart}>
        StartVotingSession
      </button>
    </div>
  );
}

export default StartVotingSession;