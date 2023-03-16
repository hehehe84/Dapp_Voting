import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const Session = () => {
    return (
    <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
            <Tab>1. Registering Voters</Tab>
            <Tab>2. Start Proposals</Tab>
            <Tab>3. End Proposals</Tab>
            <Tab>4. Start Voting</Tab>
            <Tab>5. End Voting</Tab>
            <Tab>6. Tally Votes</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            <p>one!</p>
            </TabPanel>
            <TabPanel>
            <p>two!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
    )
}
export default Session;