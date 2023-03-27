let text = document.querySelector("#textForm");
let input = document.querySelector("#userInput");

text.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(input.value);
  input.value = "";
});

let selectedIngredients = [];
let sandwichForm = document.querySelector("#sandwich-form");
let wheatBreadCheckbox = document.querySelector("#wheat-bread");
let lettuceCheckbox = document.querySelector("#lettuce");
let onionCheckbox = document.querySelector("#onion");
let peppersCheckbox = document.querySelector("#peppers");
let tomatoCheckbox = document.querySelector("#tomato");
let cheeseCheckbox = document.querySelector("#cheese");
let hamCheckbox = document.querySelector("#ham");
let turkeyCheckbox = document.querySelector("#turkey");
let baconCheckbox = document.querySelector("#bacon");
let avocadoCheckbox = document.querySelector("#avocado");

sandwichForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (wheatBreadCheckbox.checked) {
    selectedIngredients.push(wheatBreadCheckbox.value);
  }

  if (lettuceCheckbox.checked) {
    selectedIngredients.push(lettuceCheckbox.value);
  }

  if (peppersCheckbox.checked) {
    selectedIngredients.push(peppersCheckbox.value);
  }
  if (onionCheckbox.checked) {
    selectedIngredients.push(onionCheckbox.value);
  }

  if (tomatoCheckbox.checked) {
    selectedIngredients.push(tomatoCheckbox.value);
  }

  if (cheeseCheckbox.checked) {
    selectedIngredients.push(cheeseCheckbox.value);
  }

  if (hamCheckbox.checked) {
    selectedIngredients.push(hamCheckbox.value);
  }

  if (turkeyCheckbox.checked) {
    selectedIngredients.push(turkeyCheckbox.value);
  }

  if (baconCheckbox.checked) {
    selectedIngredients.push(baconCheckbox.value);
  }

  if (avocadoCheckbox.checked) {
    selectedIngredients.push(avocadoCheckbox.value);
  }

  alert("Your sandwich contains: " + selectedIngredients.join(", "));

  selectedIngredients = [];
  wheatBreadCheckbox.checked = false;
  lettuceCheckbox.checked = false;
  peppersCheckbox.checked = false;
  onionCheckbox.checked = false;
  tomatoCheckbox.checked = false;
  cheeseCheckbox.checked = false;
  hamCheckbox.checked = false;
  turkeyCheckbox.checked = false;
  baconCheckbox.checked = false;
  avocadoCheckbox.checked = false;
});

let form = document.querySelector("#haircut-form form");
let dateInput = document.querySelector("#date-input");
let cutterInput = document.querySelector("#cutter-input");
let shortHairInput = document.querySelector("#short-hair");
let longHairInput = document.querySelector("#long-hair");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let hairLength = shortHairInput.checked ? "Short" : "Long";
  let message = `Haircut scheduled for ${dateInput.value} with ${cutterInput.value} for ${hairLength} hair.`;
  alert(message);
  dateInput.value = "";
  cutterInput.value = "";
  shortHairInput.checked = false;
  longHairInput.checked = false;
});

let form1 = document.querySelector("#create-account-form form");
let usernameInput = document.querySelector("#username-input");
let emailInput = document.querySelector("#email-input");
let passwordInput = document.querySelector("#password-input")
let confirmPasswordInput = document.querySelector("#confirm-password-input")
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  let message = `Created account for ${usernameInput.value} with email ${emailInput.value}.`;
  alert(message);
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
});
