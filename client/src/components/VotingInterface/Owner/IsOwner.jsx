import { useState } from "react";
import { useEth } from "../../../contexts/EthContext";
const {state : {accounts, contract, artifact}} = useEth();
const [isOwner, setIsOwner] = useState("");

function isOwner() {
    if (artifact) {
        const owner = contract.methods.owner().call({ from: accounts[0]});
        accounts[0] === owner ? setIsOwner(true) : setIsOwner(false);
    }
    return {
        setIsOwner,       
    }
}

export default isOwner;