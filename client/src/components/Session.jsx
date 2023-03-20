import { useState } from "react";
import { useEth } from "../contexts/EthContext";
import Hello from "./VotingInterface/Hello";
import Owner from "./VotingInterface/Owner/index";
import Voter from "./VotingInterface/Voter/index";
import CommonUI from "./VotingInterface/CommonUI";
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
    const [voterAddr, setVoterAddr] = useState('');

    const sess = 
    <>
        <CommonUI currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} />
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>Welcome to your Voting App</Tab>
                    <Tab>Owner part</Tab>
                    <Tab>Voter part</Tab>
                    <Tab>Who is The Winner ?</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <Hello />
                    </TabPanel>
                    <TabPanel>
                    <Owner currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} setWinner={setWinner} voterAddr={voterAddr} setVoterAddr={setVoterAddr} />
                    </TabPanel>
                    <TabPanel>
                    <Voter currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} status={status} proposals={proposals} setProposals={setProposals} proposalID={proposalID} setProposalID={setProposalID} voterAddr={voterAddr} />
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