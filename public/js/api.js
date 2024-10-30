// Helper function to format parameters
function formatParams(params) {
  return Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
}

// GET request with improved error handling and async support
function get(endpoint, params = {}, successCallback, failureCallback) {
  const xhr = new XMLHttpRequest();
  const fullPath = `${endpoint}?${formatParams(params)}`;
  xhr.open('GET', fullPath, true);

  xhr.onload = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback && successCallback(JSON.parse(xhr.responseText));
      } else {
        failureCallback && failureCallback(xhr.statusText);
      }
    }
  };

  xhr.onerror = function() {
    failureCallback && failureCallback(xhr.statusText || 'Network error');
  };

  xhr.send(null);
}

// CORS GET request with improved structure
function get_cors(link, successCallback, failureCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', link, true);

  xhr.onload = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback && successCallback(JSON.parse(xhr.responseText));
      } else {
        failureCallback && failureCallback(xhr.statusText);
      }
    }
  };

  xhr.onerror = function() {
    failureCallback && failureCallback(xhr.statusText || 'Network error');
  };

  xhr.send(null);
}

// POST request with enhanced error handling
function post(endpoint, params, successCallback, failureCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', endpoint, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.withCredentials = true;

  xhr.onload = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback && successCallback(JSON.parse(xhr.responseText));
      } else {
        failureCallback && failureCallback(xhr.statusText);
      }
    }
  };

  xhr.onerror = function() {
    failureCallback && failureCallback(xhr.statusText || 'Network error');
  };

  xhr.send(JSON.stringify(params));
}