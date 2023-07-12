import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";


function EditProfileButton() {
  let navigate = useNavigate();
  const editBtnHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    navigate('/user/edit-profile');
  }
  return (
    <EditIcon onClick={editBtnHandler} className='actionBtn'/>
  );
}

export default EditProfileButton;