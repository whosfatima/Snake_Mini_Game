const div = document.querySelector("div");
const foodBox = document.querySelector(".food");
let number= document.querySelector('h1')

let step = 50;
let x = 0;
let y = 0;
let direction = null;
let directions = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];
let score = 0
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

  if (x == foodBox.offsetLeft && y == foodBox.offsetTop) {
    console.log("ate");
    FoodPlace();
    number.innerText= ++score
  }
};
let foodmovement = () => {
  let Xmove = window.innerWidth - step;
  let Ymove = window.innerHeight - step;

  let randomX = Math.floor(Math.random() * (Xmove / step)) * step;
  let randomY = Math.floor(Math.random() * (Ymove / step)) * step;

  return {
    X: randomX,
    Y: randomY,
  };
};

let FoodPlace = () => {
  let { X, Y } = foodmovement();
  foodBox.style.left = `${X}px`;
  foodBox.style.top = `${Y}px`;
};
setInterval(boxmovement, 200);
window.addEventListener("load", FoodPlace);
