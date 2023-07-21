import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";


function EditProfileButton() {
  let navigate = useNavigate();
  const editBtnHandler = () => {
    navigate('/user/edit-profile');
  }
  return (
    <div className='actionBtn' onClick={editBtnHandler} style={{display: "flex"}}>
      <EditIcon className='actionBtn' style={{marginLeft: "-52px"}} />
      <p style={{marginLeft: "5px", fontSize: "16px", fontWeight: "500"}}>Profili Düzenle</p>
    </div>
    
  );
}

export default EditProfileButton;