const mongoose = require("mongoose");

// Define schema for each day in the trip, including date and places visited
const daySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  places: [{
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    time: { type: Date, required: true },
    name: { type: String, required: true }
  }]
}, { _id: false });

// Define schema for each city in the trip, with location and daily itinerary
const citySchema = new mongoose.Schema({
  location: { 
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  name: { type: String, required: true },
  days: [daySchema]
}, { _id: false });

// Main trip schema, including creator details and cities visited
const tripSchema = new mongoose.Schema({
  creatorId: { type: String, required: true },
  creatorName: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now },
  name: { type: String, required: true },
  cities: [citySchema]
});

// Export Trip model for database operations
module.exports = mongoose.model("Trip", tripSchema);