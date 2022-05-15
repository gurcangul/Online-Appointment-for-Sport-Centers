import DatePicker from "react-datepicker";
import React, { useState } from "react";

const [startDate, setStartDate] = React.useState(null);

const DatePicker = ({ type, name, value, handleChange, labelText }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <DatePicker selected={startDate} onChange={(newDate) => setStartDate(newDate)} />
      </div>
    )
  }
  
  export default DatePicker


/*
import "./DatePickerInput.css";
const DatePicker = ({ name, value, handleChange }) => {
    return (
        <div className={style.containerDatePicker}>
            <label htmlFor={name} className='form-label'>
                {name}
            </label>
            <DatePicker 
                className={style.datePicker} 
                dateFormat="dd/MM/yyyy" 
                value={value}
                name={name}
                onChange={handleChange}
            />
        </div>
    )
  }
  
  export default DatePicker

  */