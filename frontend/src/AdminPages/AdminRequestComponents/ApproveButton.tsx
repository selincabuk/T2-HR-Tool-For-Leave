import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./RequestsTable.css";
import { useState } from 'react';

function ApproveButton() {
    const approveRequestHandler = () => {
        console.log("Request approved!");
    }

    // mouse ile üstüne gelince yazı göstermek için:
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div>
            <CheckCircleOutlineIcon className="request__button" onClick={approveRequestHandler}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
            >Approve</CheckCircleOutlineIcon>
            {isHovered === true ? <div className='request__button__hover__p'>Onayla</div> : ""}
        </div>
    )
}

export default ApproveButton