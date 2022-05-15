import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import MonthPicker from '@mui/lab/MonthPicker';
import YearPicker from '@mui/lab/YearPicker';
import Grid from '@mui/material/Grid';
import { color } from '@mui/system';

const CalendarPickers = (props) => {
    const [date, setDate] = React.useState(new Date());
  
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <CalendarPicker 
                        date={date} 
                        onChange={(newDate) => setDate(newDate)} 
                        loading={props.calendarProps.loading}
                        onMonthChange = {props.calendarProps.onMonthChange}
                        renderLoading = {props.calendarProps.renderLoading}
                        renderDay = {props.calendarProps.renderDay}

                        />
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
  }
  
  export default CalendarPickers