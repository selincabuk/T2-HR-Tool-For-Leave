import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "./RequestsTable.css"
function MakeVisibleButton() {
    const makeVisibleHandler = () => {
        console.log("Request made invisible!");
    }
    return (
        <div>
            <VisibilityOffIcon className="request__button" onClick={makeVisibleHandler}>Make Visible</VisibilityOffIcon>
        </div>
    )
}

export default MakeVisibleButton;