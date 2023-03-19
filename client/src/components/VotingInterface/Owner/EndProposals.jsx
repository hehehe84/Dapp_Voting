import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../../contexts/EthContext/useEth";

function EndProposalRegistering(setCurrentStatus) {
  const { state: { contract, accounts } } = useEth();

  const proposalRegisteringEnd = async () => {
    const status = await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
    setCurrentStatus(status);
  };

  return (
    <div className="endProposal">
      <button onClick={proposalRegisteringEnd}>
        End Proposal Registration
      </button>
    </div>
  );
}

export default EndProposalRegistering;