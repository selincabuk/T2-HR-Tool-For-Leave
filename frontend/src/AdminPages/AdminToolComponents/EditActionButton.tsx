import EditIcon from '@mui/icons-material/Edit';
import "./Components.css";
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

function EditActionButton() {

  // edit:
  // ToDO: sonradan 1 yerine id no yaz asko
  let navigate = useNavigate();
  const editBtnHandler = () => {
    navigate('/admin/edit/' + 1);
  }


  return (
    <Tooltip title={"Düzenle"} placement="bottom">
      <EditIcon onClick={editBtnHandler} className='actionBtn'/>
    </Tooltip>
  );
}

export default EditActionButton;