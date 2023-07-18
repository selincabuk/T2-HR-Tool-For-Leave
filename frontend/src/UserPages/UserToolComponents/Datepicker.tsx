/* import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


function StaticDatePickerLandscape() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', maxHeight: '400px', overflow: 'auto' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker orientation="landscape" />
        <StaticDatePicker orientation="landscape" />
      </LocalizationProvider>
    </div>
  );
}

export default StaticDatePickerLandscape;
 */

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./StartDatePicker.css";

function DatePickerValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <div className="datepicker-container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <div className="datepicker-wrapper">
            <label className="datepicker-label"  style={{color: 'gray', fontWeight: 'normal'}}>Başlama Tarihi Seçiniz</label>
            <DatePicker
              className="datepicker-input"
              label=""
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default DatePickerValue;
