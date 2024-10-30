# Path-Planner

Path-Planner is a web-based travel planning application that allows users to create, visualize, and manage trips. With integrated Google OAuth authentication, an interactive map, and the ability to store trip details, Path-Planner is designed to simplify planning your next adventure.

## Features

- **Google OAuth Login**: Securely sign in with your Google account.
- **Trip Creation and Management**: Create trips with multiple cities, each containing specific locations and dates.
- **Map Integration**: Visualize destinations on an interactive map powered by Leaflet and Mapbox.
- **User Profile**: View and manage your trips in a personalized profile.

## Tech Stack

- **Backend**: Node.js, Express, Mongoose, Passport.js (Google OAuth)
- **Frontend**: HTML, CSS, JavaScript, Bootstrap, Leaflet.js
- **Database**: MongoDB

## Prerequisites

- Node.js and npm installed
- MongoDB instance running locally or on a cloud service
- A Google OAuth client ID and secret

## Installation

To install and run the project locally:

```bash
# Clone the repository
git clone https://github.com/saisreenadh/Path-Planner.git
cd Path-Planner
```

## Install dependencies
```bash
npm install
```

###Create a .env file with the following:
### SESSION_SECRET=your_session_secret
### MLAB_URL=your_mongodb_connection_string
### GOOGLE_CLIENT_ID=your_google_client_id
### GOOGLE_CLIENT_SECRET=your_google_client_secret

# Start the server
```bash
npm start
```

