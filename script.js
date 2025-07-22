const div = document.querySelector("div");

let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    y += 30;
    div.style.top = `${y}px`;
  } else if (event.key === "ArrowUp") {
    y -= 30;
    div.style.top = `${y}px`;
  } else if (event.key === "ArrowRight") {
    x += 30;
    div.style.left = `${x}px`;
  } else if (event.key === "ArrowLeft") {
    x -= 30;
    div.style.left = `${x}px`;
  }
});
