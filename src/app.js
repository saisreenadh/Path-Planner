const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const favicon = require("serve-favicon");

require("dotenv").config();

// Local dependencies
const db = require("./db");
const views = require("./routes/views");
const api = require("./routes/api");
const passport = require("./passport");

const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// Set static file directory
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Authentication routes with Google OAuth
app.get("/auth/google", passport.authenticate("google", { scope: ["https://www.googleapis.com/auth/plus.login"] }));
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => res.redirect("/")
);
app.get("/logout", (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/");
  });
});

// Routes for main views and API endpoints
app.use("/", views);
app.use("/api", api);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile("404.html", { root: path.join(__dirname, "views") });
});

// Error handler for server issues
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(err.status || 500).send({
    status: err.status || 500,
    message: err.message || "Internal Server Error",
  });
});

// Start the server
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});