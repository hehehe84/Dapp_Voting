import { Button, ButtonGroup } from '@chakra-ui/react'

import { useState } from 'react';
import useEth from "../../contexts/EthContext/useEth";

function AddVoter() {
  const { state: { contract, accounts, web3 } } = useEth();
  const [voter, setVoter] = useState('');
  const [EventValue, setEventValue] = useState("");
  const [oldEvents, setOldEvents] = useState([]);
  
  const handleInputChange = (e) => {
    setVoter(e.target.value);
  };

  async function addVoter() {
    if (web3.utils.isAddress()) {
        const newVoter = voter;
        await contract.methods.addVoter(newVoter).call({ from: accounts[0] });
        await contract.methods.addVoter(newVoter).send({ from: accounts[0] });       
    };
  }
useEffect(() => {
  (async function () {
    let oldEvents = await contract.getPastEvents("VoterRegistered", {
      fromBlock: 0,
      toBlock: "latest",
    });
    let oldies = [];
    oldEvents.forEach((event) => {
      oldies.push(event.returnValues.voterAddress);
    });

    setOldEvents(oldies);

    await contract.events
      .VoterRegistered({ fromBlock: "earliest" })
      .on("data", (event) => {
        let lesevents = event.returnValues.voterAddress;
        setEventValue(lesevents);
      })
      .on("changed", (changed) => console.log(changed))
      .on("error", (err) => console.log(err))
      .on("connected", (str) => console.log(str));
  })();
}, [contract]);

  return (
      <>
        <input
          type="text"
          placeholder="Voter Address"
          value={voter}
          onChange={handleInputChange}
        />
        <button onClick={addVoter}>Add Voter</button> 
        <br/> 
    
        <div className="c">
            Events arriving: {EventValue}
        </div>
        <br/>

        <div>
            Old events :
             <ul>
                {oldEvents.map((events, index) => (
                <li key={index}>
                  {index} : {events}
                </li>
                 ))}
              </ul>
        </div>
        <br/> 
      </>
  );
}

export default AddVoter;