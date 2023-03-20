import { Button, WrapItem } from '@chakra-ui/react'
import useEth from "../../../contexts/EthContext/useEth"
import { useState, useEffect } from 'react';

function AddProposal({currentStatus, proposals, setProposals, proposalID, setProposalID}) {
  const { state: { contract, accounts, artifact, proposalList } } = useEth();
  const [newProposal, setNewroposal] = useState([]);
  const [oldProposal, setOldProposal] = useState([]);
  const [EventValue, setEventValue] = useState(1);
  const [proposalDescription, setProposalDescription] = useState([]);

  //const [desc, setDesc] = useState([]);
  
  //const [num, setNum] = useState();
  

  const addNewProposal = async () => {
    if (proposals !== "") {
      let newproposal = await contract.methods.addProposal(proposals).send({ from: accounts[0] });
      setProposals(...proposals, newproposal);
      setProposals("");
    }
  };

  useEffect(() => {
    (async function () {
      let oldProposal = await contract.getPastEvents("ProposalRegistered", {
        fromBlock: 0,
        toBlock: "latest",
      });

      let oldies = [];
      oldProposal.forEach((event) => { 
        oldies.push(event.returnValues.proposalId) 
        proposalList.push(event.returnValues.proposalId)
      });

      setOldProposal(oldies);

      let descriptions = [];
      for (let id of oldies) { 
        let description = await contract.methods
          .getOneProposal(id)
          .call({ from: accounts[0] });
        descriptions.push(description);
      }
      setProposalDescription(descriptions);

      await contract.events
        .ProposalRegistered({ fromBlock: "earliest" })
        .on("data", (event) => {
          let lesevents = event.returnValues.proposalId;
          setEventValue(lesevents);
        });
         
    })();
  }, [contract, accounts, EventValue]);

  const getOneProposal = async (e) => {
    e.preventDefault();
    if (newProposal !== Number) {
      let proposition = await contract.methods.getOneProposal(newProposal).call({ from: accounts[0] });
      setProposalID(proposition[0]);
    }
    setNewroposal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <div>
        <div>
            <div onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="New Proposal"
                  value={proposals}
                  onChange={(e) => setProposals(e.target.value)}
                />
            </div>
            <div>
              {(currentStatus === 1) ? (
                  <Button colorScheme='teal' size='md' onClick={addNewProposal}>
                    Add Proposal
                  </Button>  
              ) : (
                  <Button colorScheme='red' size='md' onClick={() => alert ('You cannot add any proposals at that time.')} >
                    Add Proposal
                  </Button>
              )}
            </div>
        </div>
          <br/>

          <h3>List of proposals :</h3>
          <br/>

          <ol>
            {proposalDescription.map((propos, index) => (
              <li key={index}>
                Proposal = {propos.description}
              </li>
            ))}
          </ol>
          <br/>

        <div>
          <div onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ProposalId"
              value={newProposal}
              onChange={(e) => setNewroposal(e.target.value)}
            />
            
          </div>
          <br/>
          <div>
          {(currentStatus === 1) ? (
                  <Button colorScheme='teal' size='md' onClick={getOneProposal}>
                    Get Proposal
                  </Button>    
              ) : (
                <Button colorScheme='red' size='md' onClick={() => alert ('You cannot add any proposals at that time.')}>
                  Get Proposal
                </Button>  
          )}
          </div>
          <br/>
        
          <p>
            Proposal description : {proposalID} 
          </p>

        </div>
    </div>
  );
}

export default AddProposal;