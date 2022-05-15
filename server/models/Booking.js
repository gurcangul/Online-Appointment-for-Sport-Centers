import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema(
  {
    planningDate: {
      type: String,
      required: [true, 'Please provide planningDate'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'canceled', 'pending'],
      default: 'pending',
    },
    bookingType: {
      type: String,
      enum: ['Cardio ', 'General Weight', 'Sudation', 'Running+Swimming'],
      default: 'Cardio',
    },
    bookingLocation: {
      type: String,
      default: 'my city',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Booking', BookingSchema)
