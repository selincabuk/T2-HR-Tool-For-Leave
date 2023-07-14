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
        Excuse Leave
      </InputLabel>
      <Select 

        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={excuseLeave}
        onChange={handleChange}
        autoWidth
        label="Excuse Leave"
        style={{ backgroundColor: "#f0f9ff" }}
      >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value="sick" style={{border: "1px solid #b3cae7" }}>Sick Leave</MenuItem>
      <MenuItem value="vacation"style={{border: "1px solid #b3cae7" }}>Vacation Leave</MenuItem>
      <MenuItem value="personal"style={{border: "1px solid #b3cae7" }}>Personal Leave</MenuItem>
      <MenuItem value="family"style={{border: "1px solid #b3cae7" }}>Family Leave</MenuItem>
      <MenuItem value="bereavement" style={{border: "1px solid #b3cae7" }}>Bereavement Leave</MenuItem>
      <MenuItem value="maternity"style={{border: "1px solid #b3cae7" }}>Maternity Leave</MenuItem>
      <MenuItem value="paternity"style={{border: "1px solid #b3cae7" }}>Paternity Leave</MenuItem>
      <MenuItem value="other"style={{border: "1px solid #b3cae7" }}>Other</MenuItem>
    </Select>
    </FormControl>
    </div>)

}
