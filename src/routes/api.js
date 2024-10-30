const express = require("express");
const connect = require("connect-ensure-login");
const passport = require("../passport");

const User = require("../models/users.js");
const Trip = require("../models/trips.js");
const router = express.Router();

// Endpoint to get current user information if authenticated
router.get("/whoami", (req, res) => {
  if (req.isAuthenticated()) {
    User.findById(req.user._id, (err, user) => {
      if (err) {
        console.error("Error fetching user:", err);
        return res.status(500).send("Internal server error");
      }
      res.send(user);
    });
  } else {
    res.send({});
  }
});

// Placeholder for trip search functionality
// router.get('/search', (req, res) => {
//   // Future implementation for trip search
// });

module.exports = router;