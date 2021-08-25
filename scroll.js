const buttonRight = document.getElementById("slide-right");
const buttonLeft = document.getElementById("slide-left");

buttonRight.onclick = function () {
  console.log("click");
  document.getElementById("tables-slider").scrollLeft += 400;
};
buttonLeft.onclick = function () {
  document.getElementById("tables-slider").scrollLeft -= 400;
};
