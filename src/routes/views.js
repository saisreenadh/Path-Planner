const express = require("express");
const router = express.Router();

// Serve the main index page
router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "src/views" });
});

// Serve the about page
router.get("/about", (req, res) => {
  res.sendFile("about.html", { root: "src/views" });
});

// Serve the user profile page based on user ID
router.get("/profile/:userId", (req, res) => {
  const { userId } = req.params;
  res.sendFile("profile.html", { root: "src/views" });
});

module.exports = router;