const html = document.querySelector(":root");
const toggleBtn = document.querySelector("#theme-btn");

/*gør at en ny side åbner i dark mode, hvis der er slået dark mode til på anden side tidligere*/
if (localStorage.getItem("darkmode")) {
  html.classList.toggle("dark");
  toggleBtn.textContent = "Light Mode";
}

function toggleTheme() {
  html.classList.toggle("dark");

  /*gør at teksten skifter afhængigt af hvilken mode vi er i og at dark mode ikke forsvinder fra side til side med local storage*/
  if (html.classList.contains("dark")) {
    toggleBtn.textContent = "Light Mode";
    localStorage.setItem("darkmode", true);
  } else {
    toggleBtn.textContent = "Dark Mode";
    localStorage.setItem("darkmode", false);
  }
}

toggleBtn.addEventListener("click", toggleTheme);
/*****************************************/
