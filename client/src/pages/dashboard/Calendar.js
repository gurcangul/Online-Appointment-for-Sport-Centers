import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { DatePicker } from '../../components/components/Pickers/DatePicker'

const Calendar = () => {
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
          <FormRow
            type='text'
            name='planning Date'
            value={planningDate}
            handleChange={handleBookingInput}
          />
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

export default Calendar
