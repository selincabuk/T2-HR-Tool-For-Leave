import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "../UserPages.css";

export default function SelectExcuseLeave() {
    const [excuseLeave, setexcuseLeave] = React.useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setexcuseLeave(event.target.value);
    };

    return(<div className="select__center" style={{marginTop: "30px"}}>
    <FormControl className='formControl' sx={{ m: 1, minWidth: 150 , maxWidth:200}}>
      <InputLabel
        id="demo-simple-select-autowidth-label"
        className="select__input"
        
      >
        İzin Sebebi
      </InputLabel>
      <Select 

        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={excuseLeave}
        onChange={handleChange}
        autoWidth
        label="Excuse Leave"
        sx={{
         
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b3cae7', // Seçili olmayan öğelerin çerçeve rengi
          },
        }}
      >
      <MenuItem value=""sx={{width:200}}>
        <em>-</em>
      </MenuItem>
      <MenuItem value="sick" style={{border: "1px solid #b3cae7" }}>Hastalık</MenuItem>
      <MenuItem value="vacation"style={{border: "1px solid #b3cae7" }}>Tatil</MenuItem>
      <MenuItem value="personal"style={{border: "1px solid #b3cae7" }}>Kişisel</MenuItem>
      <MenuItem value="family"style={{border: "1px solid #b3cae7" }}>Aile</MenuItem>
      <MenuItem value="bereavement" style={{border: "1px solid #b3cae7" }}>Yas</MenuItem>
      <MenuItem value="maternity"style={{border: "1px solid #b3cae7" }}>Doğum</MenuItem>
      <MenuItem value="other"style={{border: "1px solid #b3cae7" }}>Diğer</MenuItem>
    </Select>
    </FormControl>
    </div>)

}
