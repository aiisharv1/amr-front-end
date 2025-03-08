/**
 * This function will pass the element of which user hovers over
 * then the element e is used to read its ID attribute,
 * switch case statement reads the ID Value and sets a new image
 * @param e Element user hovers over
 */
function mouseOver(e) {
  const idValue = e.target.getAttribute("id");
  switch (idValue) {
    case "escalade-img":
      e.target.src = "images/escalade-2.jpg";
      break;
    case "ford-img":
      e.target.src = "images/ford-img-2.jpg";
      break;
    case "hyundai-img":
      e.target.src = "images/hyundai-img-2.jpg";
      break;
    case "hummer-img":
      e.target.src = "images/hummer-img-2.jpg";
      break;
  }
}

/**
 * This function will pass the element e, from which user hovers away from
 * then the element e is used to read its ID attribute,
 * switch case statement reads the ID Value and sets the original image
 * @param e Element user hovers away from
 */
function mouseOut(e) {
  const idValue = e.target.getAttribute("id");
  switch (idValue) {
    case "escalade-img":
      e.target.src = "images/escalade_SUV.jpg";
      break;
    case "ford-img":
      e.target.src = "images/ford_SUV.jpg";
      break;
    case "hyundai-img":
      e.target.src = "images/hyundai_SUV.jpg";
      break;
    case "hummer-img":
      e.target.src = "images/hummer_h2.jpg";
      break;
  }
}

//Listening to an event for a mouse over from user
document.addEventListener("mouseover", mouseOver, false);
//Listening to an event for a mouse out/away from user
document.addEventListener("mouseout", mouseOut, false);
