import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";


function EditProfileButton() {
  let navigate = useNavigate();
  const editBtnHandler = () => {
    navigate('/user/edit-profile');
  }
  return (
    <div className='actionBtn' onClick={editBtnHandler} style={{display: "flex"}}>
      <EditIcon className='actionBtn'/>
      <p style={{marginLeft: "10px", fontSize: "16px", fontWeight: "500"}}>Edit Profile</p>
    </div>
    
  );
}

export default EditProfileButton;