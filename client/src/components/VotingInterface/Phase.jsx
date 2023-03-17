import { useState } from "react";

function Phase() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const phase = [
    "RegisteringVoters",
    "ProposalsRegistrationStarted",
    "ProposalsRegistrationEnded",
    "VotingSessionStarted",
    "VotingSessionEnded",
    "VotesTallied"
  ];

}

export default Phase;