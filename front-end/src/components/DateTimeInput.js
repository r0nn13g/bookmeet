import React from "react";
// import "../styles/video-styles.css";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';

const DateTimeInput = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateTimeField']}>
      <DateTimeField label="Basic date time field" />
    </DemoContainer>
  </LocalizationProvider>
  )
};

export default DateTimeInput;