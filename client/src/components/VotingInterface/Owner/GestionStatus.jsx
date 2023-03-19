import useEth from "../../contexts/EthContext/useEth"
// import { useState, useEffect } from "react";

function GestionStatus({ currentStatus, setCurrentStatus, status })

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

export default GestionStatus;