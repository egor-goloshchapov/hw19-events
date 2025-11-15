const formElement = document.querySelector(".form");
const bodyElement = document.querySelector("body");
formElement.addEventListener("change", (event) => {
  if (event.target.name === "color") {
    bodyElement.style.backgroundColor = event.target.value;
  }
});

// 1. znaxodemo element(input) i zvitati z nego znachenya
// 2. znachenya sberigtu zminu i potim pistavlyaesh
const inputElem = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputElem.addEventListener("input", (event) => {
const inputSettings = event.target.value;
console.log(inputSettings);
spanEl.textContent = inputSettings || "незнайомець";
});
// CHOB DISTATI Z INPUTA ZNACHENYA TREBA VESTI VALUE




const rangeEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

rangeEl.addEventListener("input", () => {
  const rangeValue = rangeEl.value + "px";
  console.log(rangeValue);
  textEl.style.fontSize = rangeValue;
  console.log(textEl);
  
});
