// Fetch user information to update the navbar based on login status
get('/api/whoami', {}, function(user) {
	const navbarItem = $("#log-in");
	const newTripItem = $('#newTrip');
	const profileItem = $('#profile');
	const profileLink = $('#profile-link');
  
	if (user && user._id) {
	  // Update to show "Sign Out" if user is logged in
	  navbarItem.text("Sign Out").attr('href', "/logout");
  
	  // Display trip and profile links for logged-in users
	  newTripItem.removeClass('hidden');
	  profileItem.removeClass('hidden');
	  profileLink.attr('href', `/profile/${user._id}`);
	} else {
	  // Set link back to login if not logged in
	  navbarItem.text("Sign In").attr('href', "/auth/google");
  
	  // Hide trip and profile links if not logged in
	  newTripItem.addClass('hidden');
	  profileItem.addClass('hidden');
	}
  }, function(error) {
	console.error('Failed to fetch user info:', error);
  });  