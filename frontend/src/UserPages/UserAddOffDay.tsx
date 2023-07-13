import { useState } from "react";
import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



function UserAddOffDay() {

  const [excuseLeave, setExcuseLeave] = useState<string>("");


  const handleExcuseLeaveSelectChange = (event: SelectChangeEvent) => {
  setExcuseLeave(event.target.value as string);
};
    return (
      <div>
        <NavigationBarUser />
        <div>
        <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Excuse Leave</InputLabel>
                        <Select className="select__input" 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={excuseLeave}
                            label="Gender"
                            onChange={handleExcuseLeaveSelectChange}
                            style={{backgroundColor: "#f0f9ff" }}
                        >
                            <MenuItem value={"female"} style={{border: "1px solid #b3cae7" }}>Female</MenuItem>
                            <MenuItem value={"male"} style={{border: "1px solid #b3cae7"}}>Male</MenuItem>
                            <MenuItem value={"noresponse"} style={{border: "1px solid #b3cae7"}}>I prefer not to say</MenuItem>
                            <MenuItem value={"other"} style={{border: "1px solid #b3cae7"}}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                </div>
                
                </div>

    )
}

export default UserAddOffDay;