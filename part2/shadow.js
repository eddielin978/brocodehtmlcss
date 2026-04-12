const box = document.querySelector("#box");
const flower = document.querySelector("#flower");
const dayNight = document.querySelector("#dayNight");
const button = document.querySelector("#shadowButton");
box.addEventListener("mouseenter", () => {
  box.classList.add("boxHover");
  box.style.backgroundColor = "lightblue";
});
box.addEventListener("mouseleave", () => {
  box.classList.remove("boxHover");
  box.style.backgroundColor = "white";
});
box.addEventListener("click", () => {
  box.classList.add("clickedBox");
  setTimeout(() => {
    box.classList.remove("clickedBox");
  }, 150);
});
button.addEventListener("mouseenter", () => {
  button.classList.add("buttonHover");
  button.style.backgroundColor = "lightblue";
});
button.addEventListener("mouseleave", () => {
  button.classList.remove("buttonHover");
  button.style.backgroundColor = "white";
});
button.addEventListener("click", () => {
  button.classList.add("clickedButton");
  setTimeout(() => {
    button.classList.remove("clickedButton");
  }, 150);
});
flower.addEventListener("mouseenter", () => {
  flower.classList.add("switchHover");
});
flower.addEventListener("mouseleave", () => {
  flower.classList.remove("switchHover");
});
dayNight.addEventListener("mouseenter", () => {
  dayNight.classList.add("switchHover");
});
dayNight.addEventListener("mouseleave", () => {
  dayNight.classList.remove("switchHover");
});
flower.addEventListener("click", () => {
  flower.classList.add("clickedSwitch");
  setTimeout(() => {
    flower.classList.remove("clickedSwitch");
  }, 150);
  if (flower.textContent === "Click me!" || flower.classList.contains("poppy")) {
    flower.textContent = "";
    flower.classList.remove("poppy");
    flower.classList.add("daisy");
  } else {
    flower.classList.remove("daisy");
    flower.classList.add("poppy");
  }
});
dayNight.addEventListener("click", () => {
  dayNight.classList.add("clickedSwitch");
  setTimeout(() => {
    dayNight.classList.remove("clickedSwitch");
  }, 150);
  if (dayNight.textContent === "Click me!" || dayNight.classList.contains("night")) {
    dayNight.textContent = "";
    dayNight.classList.remove("night");
    dayNight.classList.add("day");
  } else {
    dayNight.classList.remove("day");
    dayNight.classList.add("night");
  }
});
