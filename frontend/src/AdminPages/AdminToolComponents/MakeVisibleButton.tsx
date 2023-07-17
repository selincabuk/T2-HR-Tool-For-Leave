import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "./Components.css";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function MakeVisibleButton() {

    // state to show modal:
    const [show, setShow] = useState(false);
    // function to close modal:
    const handleClose = () => setShow(false);

    const makeVisibleHandler = () => {
        setShow(true);
    }

    // mouse ile üstüne gelince yazı göstermek için:
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <VisibilityOffIcon className="request__button" onClick={makeVisibleHandler}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
            >Make Visible</VisibilityOffIcon>
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Kullanıcıyı Görnmez Yapma</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bu kullanıcıyı görünmez yapmak istediğinize emin misiniz?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={makeVisibleHandler}>Hayır</Button>
                    <Button variant="primary" onClick={makeVisibleHandler}>Evet</Button>
                </Modal.Footer>
            </Modal>
            {isHovered === true ? <div className='list__button__hover__p'>Görünmez Yap</div> : ""}
        </div>
    )
}

export default MakeVisibleButton;