import { useState } from "react";
import Owner from "./VotingInterface/Owner/index";
import Voter from "./VotingInterface/Voter/index";
import Winner from "./VotingInterface/Winner";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const Session = () => {
    const [currentStatus, setCurrentStatus] = useState(0);
    const [proposals, setProposals] = useState([]);
    // const status = [
    //   "RegisteringVoters",
    //   "ProposalsRegistrationStarted",
    //   "ProposalsRegistrationEnded",
    //   "VotingSessionStarted",
    //   "VotingSessionEnded",
    //   "VotesTallied"
    // ];
    const [winner, setWinner] = useState(null);  

    return (
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab>Owner part</Tab>
                <Tab>Voter part</Tab>
                <Tab>Who is The Winner ?</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <Owner currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} />
                </TabPanel>
                <TabPanel>
                <Voter currentStatus={currentStatus} setWinner={setWinner} proposals={proposals} setProposals={setProposals} />
                </TabPanel>
                <TabPanel>
                <Winner winner={winner} currentStatus={winner} />
                </TabPanel>
            </TabPanels>
            
        </Tabs>
    )
}
export default Session;