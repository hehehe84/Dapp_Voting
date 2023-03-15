State React : attraper les Events

    event VoterRegistered(address voterAddress); 
    event WorkflowStatusChange(WorkflowStatus previousStatus, WorkflowStatus newStatus);
    event ProposalRegistered(uint proposalId);
    event Voted (address voter, uint proposalId);

Le user connecté voit son address (header : vous êtes connecté avec votre addresse)

Tabkeau proposal (event)

Par défaut, le user n'est pas whitelisté