import Owner from "./Owner/index";
import Voter from "./Voter/index";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const Session = () => {
    return (
    <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
            <Tab>Owner part</Tab>
            <Tab>Voter part</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            <Owner />
            </TabPanel>
            <TabPanel>
            <Voter />
            </TabPanel>
        </TabPanels>
    </Tabs>
    )
}
export default Session;