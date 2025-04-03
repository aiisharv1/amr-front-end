/**
 * This function will get the last modified date using the document object
 * Then using the date object to create a new date object
 * Format the date and time using 12-hour format
 * Display the date formatted to span on the page
 */
function displayLastModified() {
  // Get the last modified date
  const lastModified = document.lastModified;

  // Create a new Date object
  const date = new Date(lastModified);

  // Format the date and time in 12-hour format
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  // Display the last modified date in the element with ID "lastModified"
  document.getElementById("last-modified").textContent = date.toLocaleString('en-US', options);
}

// Call the function when the DOM is fully loaded
window.onload = displayLastModified;
