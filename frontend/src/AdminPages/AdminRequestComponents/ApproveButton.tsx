import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./RequestsTable.css";
function ApproveButton() {
    const approveRequestHandler = () => {
        console.log("Request approved!");
    }
    return (
        <div>
            <CheckCircleOutlineIcon className="request__button" onClick={approveRequestHandler}>Approve</CheckCircleOutlineIcon>
        </div>
    )
}

export default ApproveButton