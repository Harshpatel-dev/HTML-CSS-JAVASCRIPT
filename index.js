const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

c.fillStyle = "hotpink";
isDrwaing = false;

function draw(x, y) {
  if (isDrwaing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) => {
  draw(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousedown", () => (isDrwaing = true));
canvas.addEventListener("mouseup", () => (isDrwaing = false));

document.querySelector("a").addEventListener("click", (event) => {
  console.log("hii");
  event.target.href = canvas.toDataURL();
});
