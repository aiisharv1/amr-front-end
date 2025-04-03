// JQuery Form Validator
// call the validate method on the form of validation
$("#reservationForm").validate({
  // error placement property to place the error after a desired element
  errorPlacement: function(error, element) {
    if (element.attr("name") === "carSeatRequest") {
      error.insertAfter("#car-seat-container");
    } else {
      error.insertAfter(element);
    }
  },
  //set of rules defined to validate the form
  rules: {
    fname: {
      required: true,
    },
    lname: {
      required: true,
    },
    email: {
      required: true,
      email: true
    },
    mob: {
      required: true,
      digits: true
    },
    pickUpDate: {
      required: true,
    },
    pickUpTime: {
      required: true,
    },
    pickUp: {
      required: true,
    },
    dropOff: {
      required: true,
    },
    carSeatRequest: {
      required: true,
    }
  },
  // set of messages to display when the validation fails
  messages: {
    fname: {
      required: "First name is required!"
    },
    lname: {
      required: "Last name is required!"
    },
    email: {
      required: "Email address is required!",
      email: "Please enter a valid email"
    },
    mob: {
      required: "Phone number is required!",
      digits: "Please enter a valid phone number",
    },
    pickUpDate: {
      required: "Pick up date is required!",
    },
    pickUpTime: {
      required: "Pick up time is required!",
    },
    pickUp: {
      required: "Pick up location is required!",
    },
    dropOff: {
      required: "Drop off location is required!",
    },
    carSeatRequest: {
      required: "Car Seat Selection is required!",
    }
  }
});
