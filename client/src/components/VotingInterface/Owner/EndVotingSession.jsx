import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../contexts/useEth";

function EndVotingSession() {
  const { state: { contract, accounts} } = useEth();

  const VotingSessionEnd = async () => {
    await contract.methods.endVotingSession().send({ from: accounts[0] });
  };

  return (
    <div className="endVote">
      <button onClick={VotingSessionEnd}>
        EndVotingSession
      </button>
    </div>
  );
}

export default EndVotingSession;