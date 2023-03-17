import { useState } from "react";
import Owner from "./VotingInterface/Owner/index";
import Voter from "./VotingInterface/Voter/index";
import Winner from "./VotingInterface/Winner";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const Session = () => {
    const [currentPhase, setCurrentPhase] = useState(0);
    const phase = [
      "RegisteringVoters",
      "ProposalsRegistrationStarted",
      "ProposalsRegistrationEnded",
      "VotingSessionStarted",
      "VotingSessionEnded",
      "VotesTallied"
    ];
    const [proposals, setProposals] = useState([]);
    const [winner, setWinner] = useState(null);  

    return (
    <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
            <Tab>Owner part</Tab>
            <Tab>Voter part</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            <Owner currentPhase={currentPhase} setCurrentPhase={setCurrentPhase} />
            </TabPanel>
            <TabPanel>
            <Voter proposals={proposals} currentPhase={currentPhase} setWinner={setWinner} />
            </TabPanel>
        </TabPanels>
        <Winner winner={winner} currentPhase={winner} />
    </Tabs>
    )
}
export default Session;