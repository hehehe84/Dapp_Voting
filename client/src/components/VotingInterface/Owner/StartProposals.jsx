import { Button, ButtonGroup } from '@chakra-ui/react'

import useEth from "../../contexts/EthContext/useEth";

function StartProposalRegistering(setCurrentStatus) {
  const { state: {contract, accounts} } = useEth();

  const proposalRegisteringStart = async () => {
  const status = await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
  setCurrentStatus(status);
  };

  return (
    <div className="startProp">
      <button onClick={proposalRegisteringStart}>
        Start Proposal Registration
      </button>
    </div>
  );
}

export default StartProposalRegistering;