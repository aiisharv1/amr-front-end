// This variable is used to increment the scale decimal value
// for transform style of an image.
let scaleIndicator = 0;
// The interval variable is used to save the interval event
// then clear the interval by passing this variable.
let interval;

/**
 * This function will pass the element of which user hovers over
 * then the element e is used to read its ID attribute,
 * switch case statement reads the ID Value and scales
 * the image over a setInterval method
 * @param e Element user hovers over
 */
function mouseOver(e) {
  const idValue = e.target.getAttribute("id");
  switch (idValue) {
    case "mercedes-img":
    case "jeep-img":
    case "porsche-img":
    case "lexus-img":
      interval = setInterval(() => {
        scaleIndicator += 1;
        e.target.style.transform = `scale(1.${scaleIndicator})`;

        if (scaleIndicator >= 9) {
          clearInterval(interval);
        }
      }, 80);
      break;
  }
}


/**
 * This function will pass the element of which user hovers away from
 * then the element e is used to read its ID attribute,
 * switch case statement reads the ID Value and unsets the transform
 * style and calls the clearInterval method to stop the scale up
 * @param e Element user hovers over
 */
function mouseOut(e) {
  const idValue = e.target.getAttribute("id");
  switch (idValue) {
    case "mercedes-img":
    case "jeep-img":
    case "porsche-img":
    case "lexus-img":
      clearInterval(interval);
      scaleIndicator = 0;
      e.target.style.transform = 'unset';
      break;
  }
}

//Listening to an event for a mouse over from user
document.addEventListener("mouseover", mouseOver, false);
//Listening to an event for a mouse out/away from user
document.addEventListener("mouseout", mouseOut, false);

