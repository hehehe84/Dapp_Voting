import { useState, useEffect } from "react";
import { useEth } from "../../../contexts/EthContext";

function SetVote({ proposals, setProposals, currentPhase, setWinner }) {
    const { state: { accounts, contract, proposalList }} = useEth();
    const [hasVoted, setHasVoted] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectedProposal, setSelectedProposal] = useState(0);
    const [proposalsArray, setProposalsArray] = useState([]);
  
    useEffect(() => {
    
  
        const handleVote = async () => {
          await contract.methods.setVote(parseInt(selectedProposal)).send({ from: accounts[0] });
      
        //   const winnerId = await contract.methods.winningProposalID().call({ from: accounts[0] });
          // const winnerProposal = await contract.methods.getOneProposal(parseInt(winnerId)).call({ from: accounts[0] });
          // console.log(winnerProposal);
          // setWinner(winnerProposal);
      
          window.location.reload();
        };
        
          )
        );
      }
      
      
export default SetVote;