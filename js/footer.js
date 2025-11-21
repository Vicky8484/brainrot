/**********************Surprise javas knap********************/
const surpriseBtn = document.querySelector(".surprise_btn");
const mainh1 = document.querySelector("#main-disclaimer");
const toggleKnap = document.querySelector("#theme-btn");
const knap = document.querySelector(".menuItem");
const teasers = document.querySelector(".daily_card");
const breaking = document.querySelector(".news_card");
const footer = document.querySelector("footer");

surpriseBtn.addEventListener("click", colorTransform);

function colorTransform() {
  console.log("du har klikket på knappen og funktionen kører");

  mainh1.classList.add("colortransform");
  toggleKnap.classList.add("colortransform");
  knap.classList.add("colortransform");
  teasers.classList.add("colortransform");
  breaking.classList.add("colortransform");
  footer.classList.add("colortransform");
}
