import useEth from "../../contexts/EthContext/useEth";

function Header() {

    const { state: { accounts } } = useEth();

    return(
        <div className="address">
            You are connected with the address:
            <br/>
            {accounts && accounts[0] && <pre>{accounts[0]}</pre>}
        </div>
    );
}

export default Header;
