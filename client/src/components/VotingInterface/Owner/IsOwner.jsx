import { useEth } from "../../contexts/EthContext";
import { useEffect, useState } from "react";



async function IsOwner(isOwner, setIsOwner, accounts, contract, artifact) {

    //const setIsOwner=false;
    if (artifact) {
        const owner = await contract.methods.owner().call({ from: accounts[0]});
        accounts[0] === owner ? setIsOwner(true) : setIsOwner(false);
    }
    return setIsOwner;
}

export default IsOwner;