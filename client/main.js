//TODO DOM manipulation.
const form = document.getElementById("input-form");
const feedbackContainer = document.getElementById("feedback-section");
const submitButton = document.getElementById("submit-button");
let feedbackContainerRows = 0;

onRefresh();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  addFormValuesToDatabase(formValues); //TODO
  appendFeedback(formValues); //TODO
});

async function onRefresh() {
  const fetchedData = await fetch("http://localhost:8080/get-data", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const databaseData = await fetchedData.json();
  databaseData.forEach((element) => {
    appendFeedback(element);
  });
}

function addFormValuesToDatabase(formValues) {}

function appendFeedback(parameter) {
  feedbackContainerRows++;
  feedbackContainer.style.gridTemplateRows = `50px repeat(${feedbackContainerRows}, 100px)`;
  const username = createGridItem();
  const email = createGridItem();
  const favouriteAnimal = createGridItem();
  const feedback = createGridItem();
  username.textContent = parameter.username;
  email.textContent = parameter.email;
  favouriteAnimal.textContent = parameter.favourite_animal;
  feedback.textContent = parameter.feedback;
  feedbackContainer.append(username);
  feedbackContainer.append(email);
  feedbackContainer.append(favouriteAnimal);
  feedbackContainer.append(feedback);
}

function createGridItem() {
  const gridItem = document.createElement("p");
  gridItem.classList.add("grid-item");
  return gridItem;
}
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
