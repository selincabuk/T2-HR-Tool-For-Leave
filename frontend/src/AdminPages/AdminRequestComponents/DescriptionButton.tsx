import DescriptionIcon from '@mui/icons-material/Description';
import "./RequestsTable.css";
function DescriptionButton() {
    const showDescriptionHandler = () => {
        console.log("Description shown!");
    }
    return (
        <div>
            <DescriptionIcon className="request__button" onClick={showDescriptionHandler}>Description</DescriptionIcon>
        </div>
    )
}

export default DescriptionButton;