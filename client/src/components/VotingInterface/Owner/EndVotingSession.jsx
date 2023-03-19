import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../../contexts/EthContext/useEth";

function EndVotingSession(setCurrentStatus) {
  const { state: { contract, accounts} } = useEth();

  const VotingSessionEnd = async () => {
  const status = await contract.methods.endVotingSession().send({ from: accounts[0] });
  setCurrentStatus(status);
  };

  return (
    <div className="endVote">
      <button onClick={VotingSessionEnd}>
        End Voting Session
      </button>
    </div>
  );
}

export default EndVotingSession;