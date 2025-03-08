// start function looks at the length of local storage and set the temperature of empty
function start() {
  let localStorageLength = localStorage.length;
  let localStorageVal = localStorage.getItem('temp');
  let localStorageCity = localStorage.getItem('city');
  if (localStorageLength > 0 &&
    localStorageVal !== null &&
    localStorageVal !== "" &&
    localStorageCity !== null &&
    localStorageCity !== "") {
    $('#displayResult').text(localStorageVal);
    $('#displayCity').text(localStorageCity);
  }
}

// Added event listener to run a function on load of the page
window.addEventListener("load", start, false);

$(document).ready(function() {
  let baseURL = "https://api.openweathermap.org/data/2.5/forecast"; // using OpenAPI for weather
  let apiKey = "409ab3df1969fc016a1407f54d901b5d"; //API Key for displaying weather information
  // using JQuery Dialog to ask user input for zip code
  $("#dialog").dialog({
    autoOpen: false, // Start with the dialog closed
    modal: true,     // Modal makes the dialog block interaction with other elements
    title: "Search By Zip Code",
    buttons: {
      "Submit": function() {
        let zipcode = $("#userInput").val(); // Get the input value
        $.ajax({
          url: `${baseURL}?zip=${zipcode},us&appid=${apiKey}&units=imperial`, //making the AJAX GET Call to retrieve weather temp
          type: "GET",
          dataType:"json",
          success: function(data){
            // truncating the decimal number to whole and store in variable
            let temp = Math.trunc(data.list[0].main.temp);
            let city = data.city.name;
            localStorage.setItem("temp", temp.toString());
            localStorage.setItem("city", city);
            // display the temp on the UI for user to see
            $('#displayResult').text(temp);
            $('#displayCity').text(city);
          },
          error: function(xhr, status, error) {
            alert("Error: Invalid Zipcode Entered!");// error is thrown if API call fails
          }
        }); // end ajax
        $(this).dialog("close"); // Close the dialog
      },
      "Cancel": function() {
        $(this).dialog("close"); // Close the dialog without doing anything
      }
    }
  });

  // Open the dialog when the Font Awesome pencil icon is clicked
  $("#openDialog").click(function() {
    $("#dialog").dialog("open");
  });
});  // end ready
