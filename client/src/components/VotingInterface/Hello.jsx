import { Link } from '@chakra-ui/react'
function Hello() {

    return(
        <>
        <br/>
        <br/>
            <div id="intro"> 
                Hello! This application is Yours... 😎<br/>
                Here it's possible to Develop a safe Vote for your community.<br/>
                Users can organise vote sessions whith selected members, whitch we able to add prososals and vote.
                

                <br/>
                Please, if you are a simple User, ger on Voter part☝️.<br/>
                If you are the Owner and you wich to add a new Voter or to Open Proposals/Voting Registering,<br/>
                we meet you up here (in the so call "Owner part").
            </div>
            <br/>
            <br/>
            <div id="intro2">
                Thank you for your confidence! You can check all the code in our GitHubs :<br/>
                <br/>
                Antoine Picot : <Link href='https://github.com/hehehe84/'>GitHub Link</Link><br/>
                Xavier Barada : <Link href='https://github.com/XaViPanDx'>GitHub Link</Link>
            </div>
            
            
            <br/>
            <div id="intro3">
                You like our work ?<br/>
                Don't hesitate to help us keep going! <hr/>
                You can found us with some Goerli/Sepolia test Tokens 💪<br/>
                0xA36DB186685AeD4d34B5383A05aa98CC39a1C606<br/>
                                   &&& <br/>
                0x1E2614163A0888C310d93AaF0F598a27b99Aa77A<br/>
            </div>
        </>
    );
}

export default Hello;