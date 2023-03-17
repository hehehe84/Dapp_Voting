import useEth from "../../contexts/EthContext/useEth";

function Address() {

    const { state: { accounts } } = useEth();

    return(
        <div id="addr"> 
            Your address: {accounts && accounts[0] && <pre>{accounts[0]}</pre>}
        </div>
    );
}

export default Address;