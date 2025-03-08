let asyncRequest; // hold XMLHttpRequest object

// set up and send the asynchronous request to get the XML file
function getImages(url) {
  // attempt to create XMLHttpRequest object and make the request
  try {
    asyncRequest = new XMLHttpRequest(); // create request object

    // register event handler
    asyncRequest.addEventListener(
      "readystatechange", processResponse, false);
    asyncRequest.open("GET", url, true); // prepare the request
    asyncRequest.send(null); // send the request
  } // end try
  catch (exception) {
    alert("Request Failed");
  } // end catch
} // end function getImages

function processResponse()
{
  // if request completed successfully and responseXML is non-null
  if (asyncRequest.readyState === 4 && asyncRequest.status === 200 &&
    asyncRequest.responseXML) {
    let vehicles = asyncRequest.responseXML.getElementsByTagName("vehicle");

    function getValueFromXML(vehicle, value) {
       return vehicle.getElementsByTagName(value).item(0).firstChild.nodeValue;
    }

    // get base URL for the images
    let baseUrl = asyncRequest.responseXML.getElementsByTagName(
      "baseurl").item(0).firstChild.nodeValue;

    // clear the images and make, model of cars
    for (let i = 0; i < vehicles.length; i++) {
      let vehicle = vehicles.item(i);
      let vehicleName = getValueFromXML(vehicle, "vehicle_name");
      let imageSrc = getValueFromXML(vehicle, "vehicle_img");
      let makeModel = getValueFromXML(vehicle, "make_and_model");
      let vehicleAlt = getValueFromXML(vehicle, "image_alt");
      let imgContainer = document.getElementById(`${vehicleName}-img-container`);
      let vehicleDesc = document.getElementById(`${vehicleName}-make-model`);
      let imgElement = document.createElement("img");

      clearData(vehicleName);

      imgElement.setAttribute("id", `${vehicleName}-img`);
      imgElement.setAttribute("class", "w-100 fleet-img");
      imgElement.src = baseUrl.concat(imageSrc);
      imgElement.alt = vehicleAlt;

      imgContainer.appendChild(imgElement);
      vehicleDesc.innerHTML = makeModel;
    }
  } // end if
} // end function processResponse

// clears the image, make and model of the car
function clearData(vehicleType) {
  document.getElementById(`${vehicleType}-img-container`).innerHTML = "";
  document.getElementById(`${vehicleType}-make-model`).innerHTML = "";
} // end function clearData

window.addEventListener("load", function () {
  getImages("data/vehicles.xml")
}, false);
