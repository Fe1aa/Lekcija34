var circle = document.getElementById("circle");
var showTime = document.getElementById("time");
var scoreCount = document.getElementById("score");
var timeStart = new Date().getTime();
var score = 0;

function showCircle() {
  circle.style.display = "block";
  circle.style.top = Math.random() * 500 + "px";
  circle.style.left = Math.random() * 900 + "px";
  circle.style.backgroundColor = randomColor();
  timeStart = new Date().getTime();
}

showCircle();

circle.onclick = function() {
  circle.style.display = "none";
  setTimeout(showCircle, 1000);
  var timeEnd = new Date().getTime();
  var time = (timeEnd - timeStart) / 1000;
  score++;
  showTime.innerHTML = time + "s";
  scoreCount.innerHTML = "Score: " + score;
}

function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}