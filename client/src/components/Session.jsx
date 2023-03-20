import { useState } from "react";
import { useEth } from "../contexts/EthContext";
import Owner from "./VotingInterface/Owner/index";
import Voter from "./VotingInterface/Voter/index";
import Winner from "./VotingInterface/Winner";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Session() {
    const { state } = useEth();
    const [currentStatus, setCurrentStatus] = useState(0);
    const [proposals, setProposals] = useState([]);
    const [proposalID, setProposalID] = useState([]);
    const status = [
      "RegisteringVoters",
      "ProposalsRegistrationStarted",
      "ProposalsRegistrationEnded",
      "VotingSessionStarted",
      "VotingSessionEnded",
      "VotesTallied"
    ];
    const [winner, setWinner] = useState(null); 
    const [voters, setVoters] = useState([]); 

    const sess = 
    <>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>Owner part</Tab>
                    <Tab>Voter part</Tab>
                    <Tab>Who is The Winner ?</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <Owner currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} setWinner={setWinner} voters={voters} setVoters={setVoters} />
                    </TabPanel>
                    <TabPanel>
                    <Voter currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} proposals={proposals} setProposals={setProposals} proposalID={proposalID} setProposalID={setProposalID} voters={voters} />
                    </TabPanel>
                    <TabPanel>
                    <Winner currentPhase={winner} />
                    </TabPanel>
                </TabPanels>
                
            </Tabs>
    </>
    return (
        <div>
            {
                !state.artifact ? <NoticeNoArtifact /> :
                    !state.contract ? <NoticeWrongNetwork /> :
                        sess
            }
        </div>
    )
}
export default Session;