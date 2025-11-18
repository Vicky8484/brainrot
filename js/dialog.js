const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#close_btn");

btn_open.addEventListener("click", openModal);

function openModal() {
  console.log("Der er klikket");
  document.querySelector("#dialog1").classList.add("fadeIn");
  document.querySelector("#dialog1").showModal();
}

btn_close.addEventListener("click", closeModal);

function closeModal() {
  document.querySelector("#dialog1").close();
  document.querySelector("#dialog1").classList.remove("fadeIn");
  document.querySelector("#dialog1").classList.add("fadeOut");
}
