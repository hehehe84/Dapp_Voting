import useEth from "../../../contexts/EthContext/useEth";
import { useEffect } from 'react';

function IsOwner({isOwner, setIsOwner}) {
    const { state: { contract, accounts, artifact } } = useEth();
    
    async function addrIsOwner() {
        if (artifact) {
            const owner = await contract.methods.owner().call({ from: accounts[0]});
            accounts[0] === owner ? setIsOwner(true) : setIsOwner(false);
        }
    };

    useEffect(() => {
        addrIsOwner();
    }, [accounts, contract, artifact])


    
    return (
        <div>
            {isOwner ? (
                    <h3> Hello Administrator </h3>
            ) : (
                <h3>You are not authorized here</h3>
            )}
        </div>
    );
}

export default IsOwner;