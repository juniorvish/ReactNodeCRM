import mongoose from 'mongoose';

const RevenueSchema = new mongoose.Schema({
  revenueId: {
    type: String,
    required: true,
    unique: true
  },
  revenueName: {
    type: String,
    required: true
  },
  revenueAmount: {
    type: Number,
    required: true
  },
  revenueDate: {
    type: Date,
    default: Date.now
  }
});

const Revenue = mongoose.model('Revenue', RevenueSchema);

export default Revenue;