const box = document.querySelector(".box");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
width.addEventListener("input", (e) => {
  box.style.width = `${e.target.value}px`;
});
height.addEventListener("input", (e) => {
  box.style.height = `${e.target.value}px`;
});
