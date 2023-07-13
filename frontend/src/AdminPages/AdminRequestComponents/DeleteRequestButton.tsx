import CancelIcon from '@mui/icons-material/Cancel';
import "./RequestsTable.css";
function DeleteRequestButton() {
    const deleteRequestHandler = () => {
        console.log("Request deleted!");
    }
    return (
        <div>
            <CancelIcon className="request__button" onClick={deleteRequestHandler}>Delete</CancelIcon>
        </div>
    )
}

export default DeleteRequestButton