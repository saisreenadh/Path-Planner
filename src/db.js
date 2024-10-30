const mongoose = require("mongoose");

// MongoDB connection URL from environment variables
const mongoURL = process.env.MLAB_URL;

// Mongoose connection options
const options = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
};

// Connect to MongoDB
mongoose.connect(mongoURL, options);

mongoose.connection.on("connected", () => {
  console.log("Database connected successfully");
});

mongoose.connection.on("error", (error) => {
  console.error("Database connection error:", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected");
});

// Export the database connection for use in other files
module.exports = mongoose.connection;