const form = document.getElementById("input-form");
const feedbackContainer = document.getElementById("feedback-section");
const submitButton = document.getElementById("submit-button");
let feedbackContainerRows = 0;

onRefresh();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  addFormValuesToDatabase(formValues);
  appendFeedback(formValues);
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

async function addFormValuesToDatabase(formValues) {
  await fetch("http://localhost:8080/send-data", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
}

function appendFeedback(parameter) {
  feedbackContainerRows++;
  feedbackContainer.style.gridTemplateRows = `50px repeat(${feedbackContainerRows}, 100px)`;
  Object.entries(parameter).forEach((element) => {
    if (element[0] != "id") {
      const appendee = createGridItem();
      appendee.textContent = element[1];
      feedbackContainer.append(appendee);
    }
  });
}

function createGridItem() {
  const gridItem = document.createElement("p");
  gridItem.classList.add("grid-item");
  return gridItem;
}

//! When I finish the project, DO NOT forget to replace local host url with the deployed url.
