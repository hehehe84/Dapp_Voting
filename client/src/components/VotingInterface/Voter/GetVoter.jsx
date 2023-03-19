import { Button, ButtonGroup } from '@chakra-ui/react'

import { useState } from 'react';
import useEth from '../../../contexts/useEth';

export default function GetVoter() {
  const { state: {accounts, contract} } = useEth();  
  const [address, setAddress] = useState('');
  
  function isAddressValid() {
    return web3.utils.isAddress(address);
  }

  async function getVoter() {
    if (isAddressValid()) {
        const Voter = await contract.methods.getVoter(address).call({ from: accounts[0] });
        setAddress({address});
    }
  }

  return (
    <>
       <input>
          type="text"
          placeholder="address"
          value={address}
          onChange={setAddress(event.target.value)}
          </input>
    
        <Button onClick={getVoter}>
          Get Voter
        </Button>
    </>
  );
}