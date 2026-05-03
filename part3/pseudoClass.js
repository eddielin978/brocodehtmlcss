const hover = document.querySelector(".hoverMe");
const boo = document.querySelector(".boo");
hover.addEventListener("mouseenter", () => {
  boo.classList.add("hovered");
});
hover.addEventListener("mouseleave", () => {
  boo.classList.remove("hovered");
});
