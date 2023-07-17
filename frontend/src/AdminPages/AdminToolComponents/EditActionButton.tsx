import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import "./Components.css";

function EditActionButton() {

  // mouse ile üstüne gelince yazı göstermek için:
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // edit:

  return (
    <>
    <EditIcon onClick={() => console.log("tıkladınıldım")} className='actionBtn'
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()} />
      {isHovered === true ? <div className='list__button__hover__p'>Düzenle</div> : ""}
      </>
  );
}

export default EditActionButton;