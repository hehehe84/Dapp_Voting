import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import useEth from '../../../contexts/EthContext/useEth';

function GetVoter() {
  const { state: { contract, accounts, artifact }} = useEth();

  const [voters, setVoters] = useState([]);

  useEffect(() => {
    async function getVoters() {
        if (artifact) {
            const VoterRegistered = await contract.getPastEvents('VoterRegistered', {fromBlock: 0, toBlock: "latest"});
            let VoterAddr = VoterRegistered.map((voter) => voter.returnValues._voterAddress)
            setVoters(VoterAddr);
        }
    }
    getVoters();
  }, [accounts, contract, artifact])

  return (
    <div>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Address</Th>
              <Th>Has Voted</Th>
              <Th>For Proposal :</Th>
            </Tr>
          </Thead>

          <Tbody>
            {voters.map((VoterAddr) => {
              return (
                <Tr>
                  <Th>{VoterAddr}</Th>
                  <Th>Yes</Th>
                  <Th>1</Th>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default GetVoter;