// Initialize the map with a center view and zoom level
const mymap = L.map('mapid').setView([35.7788, 10.6906], 2);

// Add map tiles from Mapbox with attribution and improved error handling
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  minZoom: 2,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiZG9uZ2pvb25sZWUiLCJhIjoiY2pjd2h4d2FyMWJpODJ4cnh2eGd1aXEyZSJ9.aUc50cVIQy3migHybIP48Q'
}).addTo(mymap);

// Restrict map scrolling within world boundaries
mymap.setMaxBounds([
  [-90, -180],
  [90, 180]
]);

// Example API call to get user information
get('/api/whoami', {}, function(user) {
  if (user && user._id) {
    console.log('User logged in:', user);
  } else {
    console.log('User not logged in');
  }
}, function(error) {
  console.error('Failed to fetch user info:', error);
});