import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

export default function TimePickers(props) {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={props.timeProps.label} 
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        minTime={props.timeProps.minTime}
        maxTime={props.timeProps.maxTime}
        renderInput={(params) => 
          <TextField 
            {...params} 
            variant="outlined"
            value={props.timeProps.value}
            name={props.timeProps.name}
            onChange={props.timeProps.onChange}
            />}
      />
    </LocalizationProvider>
  );
}
