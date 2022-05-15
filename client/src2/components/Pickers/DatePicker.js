import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const DatePickers = (props) => {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        minDate={props.dateProps.minDate}
        label={props.dateProps.label}
        selected={props.dateProps.selected}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => 
          <TextField 
            variant='outlined'
            value={props.dateProps.value}
            name={props.dateProps.name}
            onChange={props.dateProps.onChange}
            {...params} />}
      />
    </LocalizationProvider>
  );
}

export default DatePickers