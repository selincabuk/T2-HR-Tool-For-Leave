import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import "./Components.css";
import { useNavigate } from "react-router-dom";

function EditActionButton() {

  // mouse ile üstüne gelince yazı göstermek için:
  const [isHovered, setIsHovered] = useState<boolean>(false);

  /*
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
  */

  // edit:
  // ToDO: sonradan 1 yerine id no yaz asko
  let navigate = useNavigate();
  const editBtnHandler = () => {
    navigate('/admin/edit/' + 1);
  }


  return (
    <>
      <EditIcon onClick={editBtnHandler} className='actionBtn'
      />
      {isHovered === true ? <div className='list__button__hover__p'>Düzenle</div> : ""}
    </>
  );
}

export default EditActionButton;