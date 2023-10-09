const handleResourceAction = (action, rowData) => {
    if (action === 'view') {
        action.onViewClick();
    } else if (action === 'edit') {
        action.onEditClick();
    } else if (action === 'status') {
        action.handleStatusClick();
    } else if (action === 'changeDate') {
        action.handleChangeDateClick();
    } else if (action === 'addDocument') {
        action.handleAddDocument();
    } else if (action === 'addNotes') {
        action.navigateToNotesTab();
    }
};
export default handleResourceAction;
