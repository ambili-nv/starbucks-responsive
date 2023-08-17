$(document).ready(function () {
  $("#submit-form").submit(function (e) {
    e.preventDefault();

    // Get the form data
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };

    // Validate name
    if (formData.name == "") {
      alert("Please enter a name");
      return;
    }

    // Validate name length
    if (formData.name.length < 3) {
      alert("Name should be at least 3 characters long.");
      return;
    }

    // Validate name only contains alphabets and dots
    if (!/^[a-zA-Z.\s]+$/.test(formData.name)) {
      alert("Name must contain only Alphabets and dots.");
      return;
    }

    // Simple email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate message
    if (formData.message == "") {
      alert("Please enter a message");
      return;
    }

    // Submit the form
    console.log(formData);
    submit(formData);
    $("#submit-form")[0].reset();
  });
});

function submit(data) {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbw97-5GmZrlDcslN2EYz14XY_1B7IynKZMoCxZ2F90gF1Mh9RBNcAxBtOfCR5nCyWDh/exec",
    data: data,
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
    },
    error: function (err) {
      alert("Something Error");
    },
  });
}