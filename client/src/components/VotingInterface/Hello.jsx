import { Link } from '@chakra-ui/react'
function Hello() {

    return(
        <>
            <div id="addr"> 
                Hello, this application is Yours.<br/>
                Here it's possible to Develop a Vote For your community.
                <hr/>
                Please, if you are a simple User, ger on Voter part☝️.
                If you are the Owner and you wich to add a new Voter or to Open Proposals/Voting Registering,<br/>
                we meet you up here (in the so call "Owner part").
            </div>
            <div>
                Thank you for your confidence. You can check all the code in our GitHubs<hr/>
                Antoine Picot : <Link href='https://github.com/hehehe84/'>GitHub</Link><br/>
                Xavier Barrada : <Link href='https://github.com/XaViPanDx'>GitHub</Link>
            </div>
            <div>
                You like our work ?<br/>
                Don't hesitate to help us keep going. <hr/>
                Found us with some Goerli/Sepolia !<br/>
                0xA36DB186685AeD4d34B5383A05aa98CC39a1C606
            </div>
        </>
    );
}

export default Hello;