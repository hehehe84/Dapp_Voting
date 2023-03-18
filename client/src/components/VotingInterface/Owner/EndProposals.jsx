import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../../contexts/EthContext/useEth";

function EndProposalRegistering() {
  const { state: { contract, accounts } } = useEth();

  const proposalRegisteringEnd = async () => {
    await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
  };

  return (
    <div className="endProp">
      <button onClick={proposalRegisteringEnd}>
        EndProposalRegistration
      </button>
    </div>
  );
}

export default EndProposalRegistering;