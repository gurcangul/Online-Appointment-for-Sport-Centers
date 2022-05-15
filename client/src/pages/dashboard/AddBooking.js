import { FormRow, FormRowSelect, Alert, FormRowSelect2 } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import React, { useState } from "react";

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
    bookingTime,
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

    if (!position || !planningDate || !bookingTime) {
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

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit booking' : 'add booking'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>

          {/* position */}
          <FormRow
          labelText='booking note'
            type='text'
            name='position'
            value={position}
            handleChange={handleBookingInput}
          />

          {/* planningDate */}
           <FormRow
            type='date'
            labelText='booking Date'
            name='planningDate'
            value={planningDate}
            handleChange={handleBookingInput}          
            />
       

          {/* booking Time */}
          <FormRow
            type='time'
            labelText='booking Time'
            name='bookingTime'
            value={bookingTime}
            handleChange={handleBookingInput}
          />
          
          {/* booking status */}
          <FormRowSelect2
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
              disabled={isLoading}>Submit</button>
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
