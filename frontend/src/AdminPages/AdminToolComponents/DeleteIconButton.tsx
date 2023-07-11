import CancelIcon from '@mui/icons-material/Cancel';
import "./Components.css";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteIconButton() {

    // state to show modal:
    const [show, setShow] = useState(false);
    // function to close modal:
    const handleClose = () => setShow(false);

    // function to delete user:
    const deleteUserHandler = () => {
        console.log("User deleted!");
        setShow(false);
    }
    return (
        <>
            <CancelIcon onClick={() => setShow(true)} className='actionBtn' />
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Deleting User?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this user?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={deleteUserHandler}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteIconButton;