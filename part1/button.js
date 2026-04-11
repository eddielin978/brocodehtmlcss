let clicks = 0;
const click = document.querySelector("button");
click.addEventListener("click", () => {
  clicks++;
  document.getElementById("clicks").innerHTML = `Clicks: ${clicks}`;
});
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  clicks = 0;
  document.getElementById("clicks").innerHTML = `Clicks: 0`;
});
