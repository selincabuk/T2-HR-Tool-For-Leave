import DescriptionIcon from '@mui/icons-material/Description';
import "./RequestsTable.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface DescriptionButtonProps {
    startDate: string,
    endDate: string,
    reason: string
    status: string
}


function DescriptionButton(props: DescriptionButtonProps) {

    // açıklama göstermek için stateler:
    const [showDescription, setShowDescription] = useState<boolean>(false);
    const handleClose = () => setShowDescription(false);

    const showDescriptionHandler = () => {
        setShowDescription(true);
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
            <Modal show={showDescription} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detaylar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <strong>Durum:</strong> {props.status }<br></br>
                    <strong>Başlangıç tarihi:</strong> {props.startDate} <br></br>
                    <strong>Bitiş tarihi:</strong> {props.endDate} <br></br>
                    <strong>Toplam gün sayısı:</strong> {props.endDate} - {props.startDate} <br></br>
                    <strong>Açıklama:</strong> {props.reason === "" ? "Belirtilmemiş" : props.reason}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>
            <DescriptionIcon className="request__button" onClick={showDescriptionHandler} onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}></DescriptionIcon>
            {isHovered === true ? <div className='request__button__hover__p'>Detaylar</div> : ""}
        </div>
    )
}

export default DescriptionButton;