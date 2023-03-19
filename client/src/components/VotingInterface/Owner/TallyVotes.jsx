import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../../contexts/EthContext/useEth";

function TallyVotes(setCurrentStatus) {
  const { state: {contract, accounts} } = useEth();

  const tallyVotes = async () => {
  const status = await contract.methods.tallyVotes().send({ from: accounts[0] });
  setCurrentStatus(status);
  };

  return (
    <div className="tallyVote">
      <button onClick={tallyVotes}>
        Tally Votes
      </button>
    </div>
  );
}

export default TallyVotes;

