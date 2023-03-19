import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../../contexts/EthContext/useEth";

<<<<<<< Updated upstream
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
=======
function TallyVotes() {
  const { state: { contract, accounts } } = useEth();

  const countVotes = async () => {
    await contract.methods.tallyVotes().send({ from: accounts[0] });
  };

  return (
    <div className="btns">
      <button onClick={countVotes} className="">
        Count Votes
>>>>>>> Stashed changes
      </button>
    </div>
  );
}

<<<<<<< Updated upstream
export default StartProposalRegistering;

=======
export default TallyVotes;
>>>>>>> Stashed changes
