import { useState, useEffect } from "react";
import { useEth } from "../../contexts/EthContext";

function Winner({ currentPhase }) {
  const { state: { accounts, contract, artifact }} = useEth();
  const [winner, setWinner] = useState([]);

  useEffect(() => {
    async function getWinner() {
      if (contract) {
        const winnerId = await contract.methods.winningProposalID().call({ from: accounts[0] });
        const winnerProposal = await contract.methods.getOneProposal(parseInt(winnerId)).call({ from: accounts[0] });
        console.log(winnerProposal);
        setWinner(winnerProposal);
      }
    };

    getWinner();
  }, [accounts, contract, artifact]);

  return (
    <div className="winner">
      The winner is : {winner.description} with {winner.voteCount} votes !
    </div>
  );
}

export default Winner;