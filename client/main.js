//TODO DOM manipulation.
const form = document.getElementById("input-form");
const feedbackContainer = document.getElementById("container-section");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
});

//TODO Form: Event to submit form data.

//! When I finish the project, DO NOT forget to replace local host url with the deployed url.
//! We need to fetch the create endpoint to send form values to the server.
// fetch("localhost-url/endpoint"),{
//   method:
//   headers:
//   body:
// }

//TODO FEEDBACK CONTAINER.
//TODO Fetch the READ endpoint to access the data.

//TODO Create DOM elements to contain the data.
