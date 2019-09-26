const mongoose = require('mongoose');

const boardingCardSchema = new mongoose.Schema({
  origin: { type: String },
  destination: { type: String },
  meansOfTransportation: { type: String, enum: ["Flight", "Train", "Bus"] },
  date: { type: Date }, // date and time in UTC for departure
  seatAssignment: { type: String },
  transportNumberDetails: { type: String },
  gate: { type: String },
  baggageDetails: {type: String}

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('BoardingCard', boardingCardSchema);
