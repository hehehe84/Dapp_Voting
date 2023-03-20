import { Link } from '@chakra-ui/react'
function Hello() {

    return(
        <>
        <hr/>
        <br/>
            <div id="intro"> 
                Hello, this application is Yours 😎.<br/>
                Here it's possible to Develop a Vote For your community.
                <br/>
                Please, if you are a simple User, ger on Voter part☝️.<br/>
                If you are the Owner and you wich to add a new Voter or to Open Proposals/Voting Registering,<br/>
                we meet you up here (in the so call "Owner part").<hr/>
            </div>
            <br/>
            <br/>
            <div id="intro2">
                Thank you for your confidence. You can check all the code in our GitHubs in total open source 🐆<br/>
                Antoine Picot : <Link href='https://github.com/hehehe84/'>GitHub</Link><br/>
                Xavier Barada : <Link href='https://github.com/XaViPanDx'>GitHub</Link><hr/>
            </div>
            <br/>
            <br/>
            <br/>
            <div id="intro3">
                You like our work ?<br/>
                Don't hesitate to help us keep going. <hr/>
                Found us with some Goerli/Sepolia !<br/>
                0xA36DB186685AeD4d34B5383A05aa98CC39a1C606
            </div>
        </>
    );
}

export default Hello;