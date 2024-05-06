let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
const speed = 2;
let dvd = document.getElementById("dvd");
let prevColorChoiceIndex = 0;
let black = document.getElementById("black");
let thing = 0;
const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + dvdHeight >= screenHeight || y < 0) {
    dirY *= -1;
  }
  if (x + dvdWidth >= screenWidth || x < 0) {
    dirX *= -1;
  if (x == 0 && y == 0) {
    thing++
    console.log(thing)
  }
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
