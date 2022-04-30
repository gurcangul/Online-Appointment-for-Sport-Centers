import './style.css';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useState} from 'react';
import { Paper, Button, TextField, Grid } from '@material-ui/core';
import { Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const UserSchedule = () => {
    
const locales = {
    "en-US" : require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

    const events = [
        {
            title : "Big Meeting",
            allDay: true,
            start : new Date(2022,3,1),
            end: new Date(2022,3,5)
        },
        {
            title : "Vacation",
            start : new Date(2022,4,7),
            end: new Date(2022,4,10)
        },
        {
            title : "Conference",
            start : new Date(2022,5,0),
            end: new Date(2022,5,0)
        },
    ]

    const [newEvent, setNewEvent] = useState({title: "", start:"", end:""})
    const [allEvents, setAllEvents] = useState(events)
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());


    function handleAddEvent() {
        newEvent.start=startDate;
        newEvent.end= endDate;
        setAllEvents([...allEvents, newEvent])
        // all events veritabanına eklenecek ve veriler ordan gelecek.
    }

    return(
        <Paper>
            <div>
                <h3>SCHEDULE</h3>
                <div>
                <Grid container cols={12} style={{marginBottom: "5px"}}>
                    <TextField  variant="outlined" placeholder='Add Title' style={{width: "20%", margin: "5px"}}
                        value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            value={startDate}
                            minDate={new Date()}
                            label="Start Date"
                            selected={newEvent.end}
                            onChange={(newValue) => {
                            setStartDate(newValue);
                            }}
                            renderInput={(params) => 
                            <TextField 
                                variant='outlined'
                                value={startDate}
                                name="startDate"
                                onChange= {(e) => setNewEvent({...newEvent, start: e.target.value}) }
                                {...params} />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            value={endDate}
                            minDate={startDate}
                            label="End Date"
                            selected={newEvent.end}
                            onChange={(newValue) => {
                            setEndDate(newValue);
                            }}
                            renderInput={(params) => 
                            <TextField 
                                variant='outlined'
                                value={endDate}
                                name="endDate"
                                onChange= {(e) => setNewEvent({...newEvent, end: e.target.value}) }
                                {...params} />}
                        />
                    </LocalizationProvider>
                    <Button onClick={handleAddEvent} style={{color:'White', backgroundColor : '#01579b', margin: "5px"}}> Add Event</Button>
                  </Grid>  
                </div>
                <Calendar 
                    localizer={localizer} 
                    events={allEvents} 
                    startAccessor="start" 
                    endAccessor="end" 
                    style={{height: 500}} 

                />
            </div>
        </Paper>
    )
}

export default UserSchedule;

/*
<DatePicker placeholderText='Start Date' style={{marginRight: "5px"}}
                                selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
                    />
                    <DatePicker placeholderText='End Date'
                                selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
                    />


                    <Typography  style={{margin: "5px"}} > 
                        <DatePicker dateProps = {startDate}/>
                    </Typography>
                   
                    <Typography  style={{margin: "5px"}} ><DatePicker dateProps = {endDate}/></Typography>

                    */