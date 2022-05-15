import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import { FaCalendarAlt } from 'react-icons/fa';
import Datetime from 'react-datetime';
import TimePicker from 'react-time-picker';
import TimeKeeper from 'react-timekeeper';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import required css from library
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";

const AddBooking = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    planningDate,
    bookingLocation,
    bookingType,
    bookingTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createBooking,
    editBooking,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !planningDate || !bookingLocation) {
      displayAlert()
      return
    }
    if (isEditing) {
      editBooking()
      return
    }
    createBooking()
  }
  const handleBookingInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }
  const [startDate, setStartDate] = React.useState(null);
  const [value, onChange] = React.useState(null);
  const [time, setTime] = React.useState(null)
  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit booking' : 'add booking'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleBookingInput}
          />
          {/* planningDate */}
          <div className='form-row'>
            <label htmlFor={planningDate} className='form-label'>
              {"Planning Date"}
            </label>
            <Datetime  
                value={startDate}
                selected={startDate} 
                className='date-picker'
                onChange={(newDate) => setStartDate(newDate)} 
              
            />
         </div>
          {/* location */}
          <FormRow
            type='text'
            labelText='booking location'
            name='bookingLocation'
            value={bookingLocation}
            handleChange={handleBookingInput}
          />
          
          {/* booking status */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleBookingInput}
            list={statusOptions}
          />
          {/* booking type */}
          <FormRowSelect
            name='bookingType'
            labelText='booking type'
            value={bookingType}
            handleChange={handleBookingInput}
            list={bookingTypeOptions}
          />
          {/* btn container */}
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddBooking
