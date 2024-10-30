const mongoose = require("mongoose");

// Define User schema for storing Google OAuth user information
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  googleId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

// Export User model for database operations
module.exports = mongoose.model("User", userSchema);