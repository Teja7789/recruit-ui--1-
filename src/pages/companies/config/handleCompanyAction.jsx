const handleCompanyAction = (action, rowData) => {
    switch (action) {
        case 'view':
            // Implement view action logic
            console.log('Viewing:', rowData.companyName);
            break;
        case 'edit':
            // Implement edit action logic
            console.log('Editing:', rowData.companyName);
            break;
        case 'addUser':
            // Implement edit action logic
            console.log('AddUser:', rowData.companyName);
            break;
        case 'addDocuments':
            // Implement edit action logic
            console.log('AddDocuments:', rowData.companyName);
            break;
        case 'addNotes':
            // Implement delete action logic
            console.log('AddNotes:', rowData.companyName);
            break;
        default:
            break;
    }
};
export default handleCompanyAction;
