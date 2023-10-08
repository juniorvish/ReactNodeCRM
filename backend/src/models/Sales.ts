import mongoose from 'mongoose';

const SalesSchema = new mongoose.Schema({
  salesId: {
    type: String,
    required: true,
    unique: true
  },
  salesData: {
    type: Object,
    required: true
  }
});

const Sales = mongoose.model('Sales', SalesSchema);

export default Sales;