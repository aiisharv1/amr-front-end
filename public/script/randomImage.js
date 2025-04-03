/**
 * This function sets the background image randomly on every page load
 * using an array to store the image names.
 */
function changeImage() {
  var images = ["limo1", "limo2", "limo3"];
  var randomIndex = Math.floor(Math.random() * 3);
  document.getElementById("header").style.background = `url(./images/${images[randomIndex]}.jpg) top/cover no-repeat`;
}

// This event listener executes the changeImage function on each page load.
window.addEventListener("load", changeImage, false);
