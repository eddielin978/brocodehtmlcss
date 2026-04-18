const buttons = document.querySelectorAll(".box");
const number = document.querySelector("#number");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let actualLen = number.textContent.length - 8;
    if (actualLen < 12) {
      if (actualLen === 3 || actualLen === 7) number.textContent += "-";
      number.textContent += button.textContent.slice(4);
    }
  });
});
