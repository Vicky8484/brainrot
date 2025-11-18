const form = document.querySelector("form");
const firstOutput = document.querySelector(".first_output");

/**************Laver mulighed for at skrive noget andet i checkbox*************/
document.querySelector(".andet").classList.add("hide");

document.querySelector("#scroll").addEventListener("change", showAndet);

function showAndet() {
  console.log("#showAndet");

  if (document.querySelector("#scroll").value == "andet") {
    document.querySelector(".andet").classList.remove("hide");
  }
}
/*****************FJERN BROWSER POP-UP???*******************/
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

/***********************************************************************/
const firstNameOut = document.querySelector(".first_output");
const alderOutput = document.querySelector(".alder_output");
const emailOutput = document.querySelector(".email_output");
const occuOutput = document.querySelector(".occu_output");
const scrollOutput = document.querySelector(".scroll_output");
const beskrivelseOutput = document.querySelector(".beskrivelse_output");
const samtykkeOutput = document.querySelector(".samtykke_output");
const checkboxOutput = document.querySelector(".brainrot_output");

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  const formData = new FormData(form);

  const firstName = formData.get("name");
  firstNameOut.textContent = firstName;

  const alder = formData.get("alder");
  alderOutput.textContent = alder;

  const email = formData.get("email");
  emailOutput.textContent = email;

  const occupation = formData.get("occupation");
  occuOutput.textContent = occupation;

  const scroll = formData.get("scroll");
  scrollOutput.textContent = scroll;

  const beskrivelse = formData.get("beskrivelse");
  beskrivelseOutput.textContent = beskrivelse;

  const checkboxOutput = formData.getAll("checkbox").join(" ,");
  checkboxOutput.textContent = checkbox;

  const samtykke = formData.get("samtykke");
  samtykkeOutput.textContent = samtykke;

  form.reset();
}
