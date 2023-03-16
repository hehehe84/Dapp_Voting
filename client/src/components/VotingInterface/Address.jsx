import useEth from "../../contexts/EthContext/useEth";

function Address() {

    const { state: { accounts } } = useEth();

    return(
        <div>
            Your address:
            <br/>
            {accounts && accounts[0] && <pre>{accounts[0]}</pre>}
        </div>
    );
}

export default Address;