import { useEth } from "../../../contexts/EthContext";
import { useEffect } from "react";
import isOwner from "./IsOwner";

// function Owner() {
function Owner() {
  const {state : {accounts, contract, artifact}} = useEth();

  useEffect(() => {
    isOwner()
  }, [accounts, contract, artifact]);

  return (
        <div>
          <h3>Owner Part</h3>
        </div>
  );
}

export default Owner;