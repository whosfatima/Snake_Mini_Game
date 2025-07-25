const div = document.querySelector("div");
const foodBox = document.querySelector(".food");

let step = 30;
let x = 0;
let y = 0;
let direction = null;
let directions = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];
document.addEventListener("keydown", (event) => {
  if (directions.includes(event.key)) {
    direction = event.key;
  }
});

let boxmovement = () => {
  if (direction === "ArrowDown") {
    y += step;
    div.style.top = `${y}px`;
  } else if (direction === "ArrowUp") {
    y -= step;
    div.style.top = `${y}px`;
  } else if (direction === "ArrowRight") {
    x += step;
    div.style.left = `${x}px`;
  } else if (direction === "ArrowLeft") {
    x -= step;
    div.style.left = `${x}px`;
  }
};

setInterval(boxmovement, 200);
