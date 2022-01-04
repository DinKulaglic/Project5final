var formButton = document.getElementById("contact-form-button");
var formContent = document.getElementById("form-content");

formButton.addEventListener("click", () => {
  formContent.classList.remove("d-none");
  formButton.classList.add("d-none");
});

const textButton1 = document.getElementById("button-text1");
textButton1.addEventListener("click", () => {
  document.getElementById("text1").classList.toggle("d-none");
});

const textButton2 = document.getElementById("button-text2");
textButton2.addEventListener("click", () => {
  document.getElementById("text2").classList.toggle("d-none");
});

const textButton3 = document.getElementById("button-text3");
textButton3.addEventListener("click", () => {
  document.getElementById("text3").classList.toggle("d-none");
});

const textButton4 = document.getElementById("button-text4");
textButton4.addEventListener("click", () => {
  document.getElementById("text4").classList.toggle("d-none");
});
