import CancelIcon from '@mui/icons-material/Cancel';
import "./RequestsTable.css";
import { useState } from 'react';
function DeleteRequestButton() {
    const deleteRequestHandler = () => {
        console.log("Request deleted!");
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
            <CancelIcon className="request__button" onClick={deleteRequestHandler}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
            >Delete</CancelIcon>
            {isHovered === true ? <div className='request__button__hover__p'>Reddet</div> : ""}
        </div>
    )
}

export default DeleteRequestButton