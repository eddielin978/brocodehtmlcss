const submit = document.querySelector("form");
const isSubmitted = document.querySelector("#isSubmitted");
const html = document.querySelector("html");
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const favColor = document.querySelector("[type=color]").value;
  const transparency = document.querySelector("[type=range]").value;
  isSubmitted.textContent = `Submitted successfully! ${favColor}`;
  html.style.backgroundColor = favColor;
});
