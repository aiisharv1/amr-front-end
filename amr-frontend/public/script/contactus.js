// Save the checkbox element to a variable to use later in the code
const checkbox = document.getElementById("add-additional");

// use the checkbox to listen for change of the check or uncheck
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    // If the checkbox is checked this function will add the pickup date and pickup time input fields
    document.getElementById("new-content").innerHTML = "" +
      "<div class='form-group col-sm-6 flex-column d-flex'>\n" +
      " <label for='pick-up-date'>Pickup Date:</label>\n" +
      " <input type='date' id='pick-up-date' name='pick-up-date'>\n" +
      "</div>" +
      "<div class='form-group col-sm-6 flex-column d-flex'>\n" +
      " <label for='pick-up-time'>Pickup Time:</label>\n" +
      " <input type='time' id='pick-up-time' name='pick-up-time'>\n" +
      "</div>";
  } else if (!checkbox.checked) {
    // When checkbox is unchecked by the user it allows the removal of inputs above.
    document.getElementById("new-content").innerHTML = "";
  }
}, false);


// Saving the range input type to variable range to be used later in the code.
const range = document.getElementById("text-size-range");

// use the range input to listen for input change from user.
range.addEventListener("input", function () {
  // Run this function when the change is triggered in the range,
  // this will take the value from range and set the text size
  const fontChangeElements = document.getElementsByClassName("legend-font-change");
  for (const key in fontChangeElements) {
    fontChangeElements[key].style.fontSize = range.value + "px";
  }
}, false);
