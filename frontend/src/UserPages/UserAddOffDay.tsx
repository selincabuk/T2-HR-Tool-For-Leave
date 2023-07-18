import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import SelectExcuseLeave from './UserToolComponents/ExcuseLeaveSelect';
import DatePickerFinishValue from './UserToolComponents/FinishDatePicker';
import IconLabelButtons from './UserToolComponents/RequestOffDayButton';
import StickyFooter from '../StickyFooter';
import StaticDatePickerLandscape from './UserToolComponents/Datepicker';



function UserAddOffDay() {
  return (
    <div className="select__container" >
      <NavigationBarUser />
      <SelectExcuseLeave />
      <StaticDatePickerLandscape />
      <DatePickerFinishValue />
      <IconLabelButtons />
      <StickyFooter />
     
    </div>
  );
}

export default UserAddOffDay;
