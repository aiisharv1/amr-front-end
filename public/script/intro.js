// Below is the JS library Typed used to show a cool trick with js
// This library types the text on to the page for the first line
var type1 = new Typed('.auto-input-name', {
  strings: ['Welcome to AMR!'],
  typeSpeed: 50,
  showCursor: false,
});

// Re-using the Typed JS library to ask the user for name
var type2 = new Typed('.auto-input', {
  strings: ['What is your name?'],
  typeSpeed: 50,
  startDelay: 1000,
  showCursor: false,
});

/**
 * This function passes two arguments and hides the question of what's your name?
 * Resets the user answer to empty string and then types the answer using Typed JS library
 * @param value this is the value passed from user input, the name of user
 * @param delay the delay in start, this waits for the first line to be typed
 */
function localSavedName(value, delay) {
  document.getElementById("user-name-question").style.display = "none";
  document.getElementById("user-name-answer").innerText = "";
  var type = new Typed('.auto-name', {
    strings: ['Nice to meet you, '.concat(value)+'.'],
    typeSpeed: 50,
    startDelay: delay,
    showCursor: false,
  });
}

/**
 * This function is used to validate the user is not submitting empty name field
 * Then if name is present then saves it to local storage and displays to the page
 */
function saveName() {
  var value = document.getElementById("name-field").value;
  if (value === "") {
    window.alert("Name is required!");
  } else {
    localSavedName(value, 10);
    localStorage.setItem("name", value);
  }
}

/**
 * This function is used to clear the name added by the user and then reloads the page.
 */
function clearName() {
  localStorage.removeItem('name');
  location.reload();
}

/**
 * This function starts as soon as the page is loaded
 * It checks for localstorage name to exist, if so then shows the name on the page
 * if not, it then asks the user to add a name.
 */
function start() {
  var localStorageLength = localStorage.length;
  if (localStorageLength > 0 && localStorage.getItem('name') !== null) {
    var firstName = localStorage.getItem('name');
    localSavedName(firstName, 1000);
  }
  document.getElementById("name-btn").addEventListener("click", saveName, false);
  document.getElementById("reset-btn").addEventListener("click", clearName, false);
}

// Added event listener to run a function on load of the page
window.addEventListener("load", start, false);
