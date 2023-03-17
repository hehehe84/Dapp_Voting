import { useEth } from "../../../contexts/EthContext";
import { useEffect, useState } from "react";
import IsOwner from "./IsOwner";

// function Owner() {
function Owner() {
  const {state : {accounts, contract, artifact}} = useEth();
  const [isOwner, setIsOwner] = useState("");

  useEffect(() => {
    async function checkOwner() {
      const updateVal = await IsOwner(accounts, contract, artifact);
      setIsOwner(updateVal);
    }
    checkOwner();
  }, [accounts, contract, artifact]);

  return (
        <div>
          <h3>Owner renwO</h3>
        </div>
  );
}

export default Owner;