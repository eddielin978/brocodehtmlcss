const vButton = document.querySelector("#vButton");
const hButton = document.querySelector("#hButton");
const aButton = document.querySelector("#aButton");
const div = document.querySelector(".container");
vButton.addEventListener("click", () => {
  div.classList.remove(...div.classList);
  div.classList.add("container", "visible");
});
hButton.addEventListener("click", () => {
  div.classList.remove(...div.classList);
  div.classList.add("container", "hidden");
});
aButton.addEventListener("click", () => {
  div.classList.remove(...div.classList);
  div.classList.add("container", "auto");
});
