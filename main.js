// fetch JavaScript objects representing specific elements in the DOM
let form = document.querySelector("#contactForm");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");
let formStatus = document.querySelector("#formStatus");

// add an event listener on the form element
form.addEventListener("submit", handleSubmit);

// callback function to handle submit event
function handleSubmit(event) {
  event.preventDefault();

  let isValid = true;
  formStatus.textContent = "";

  if (nameInput.value.trim() === "") {
    nameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
  }

  if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.remove("is-invalid");
  }

  if (messageInput.value.trim() === "") {
    messageInput.classList.add("is-invalid");
    isValid = false;
  } else {
    messageInput.classList.remove("is-invalid");
  }

  if (!isValid) {
    formStatus.textContent = "Please fill out all required fields.";
    formStatus.style.color = "red";
    return;
  }

  // status text
  formStatus.textContent = "Message sent!";
  formStatus.style.color = "var(--pink)";

  // Show the actual message on the page
  const messageDisplay = document.querySelector("#messageDisplay");
  messageDisplay.innerHTML = `
    <h3>Last message:</h3>
    <p><strong>Name:</strong> ${nameInput.value}</p>
    <p><strong>Email:</strong> ${emailInput.value}</p>
    <p><strong>Message:</strong> ${messageInput.value}</p>
  `;

  // clear the inputs
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
}
