import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../../contexts/EthContext/useEth";

function StartProposalRegistering() {
  const { state: {contract, accounts} } = useEth();

  const proposalRegisteringStart = async () => {
    await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
  };

  return (
    <div className="startProp">
      <button onClick={proposalRegisteringStart}>
        StartProposalRegistering
      </button>
    </div>
  );
}

export default StartProposalRegistering;