const form = document.getElementById("input-form");
const feedbackContainer = document.getElementById("feedback-section");
const submitButton = document.getElementById("submit-button");
let feedbackContainerRows = 0;

onRefresh();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  const valid = await addFormValuesToDatabase(formValues);
  if (valid == true) {
    appendFeedback(formValues);
  } else {
    console.log("no");
  }
});

async function onRefresh() {
  try {
    const fetchedData = await fetch("https://week-4-project-cxss.onrender.com/get-data", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const databaseData = await fetchedData.json();
    databaseData.forEach((element) => {
      appendFeedback(element);
    });
  } catch {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Error accessing the server or database";
    feedbackContainer.append(errorMsg);
  }
}

async function addFormValuesToDatabase(formValues) {
  const fetchedResponse = await fetch("https://week-4-project-cxss.onrender.com/send-data", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const response = await fetchedResponse.json();
  if (response.message == "Failed to add data to the database") {
    return false;
  } else {
    return true;
  }
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
