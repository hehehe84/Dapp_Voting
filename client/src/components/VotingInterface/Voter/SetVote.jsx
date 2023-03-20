import { useState, useEffect } from "react";
import { useEth } from "../../../contexts/EthContext";

function SetVote({ proposals, setProposals, currentPhase, setWinner }) {
    const { state: { accounts, contract, artifact, proposalList }} = useEth();
    const [hasVoted, setHasVoted] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectedProposal, setSelectedProposal] = useState(0);
    const [proposalsArray, setProposalsArray] = useState([]);
  
    