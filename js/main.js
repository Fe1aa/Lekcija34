var circle = document.getElementById("circle");
var showTime = document.getElementById("time");
var scoreCount = document.getElementById("score");
var timeStart = new Date().getTime();
var timeBetween = 2000;
var circleSize = 250;
var editCount = 20;
var score = 0;
const colors = ["#FFFFF0", "#D4AF37", "#B87333", "#FFB7C5", "#8F9E8B"];

function showCircle() {
  circle.style.display = "block";
  circle.style.top = Math.random() * 500 + "px";
  circle.style.left = Math.random() * 900 + "px";
  circle.style.backgroundColor = randomColor();
  circle.style.width = circleSize + "px";
  circle.style.height = circleSize + "px";
  timeStart = new Date().getTime();
}

function updateVariables() {
  if(editCount <= 0) {
    return;
  }
  editCount--;
  timeBetween -= 40;
  circleSize -= 10;
}

showCircle();

circle.onclick = function() {
  circle.style.display = "none";
  setTimeout(showCircle, timeBetween);
  var timeEnd = new Date().getTime();
  var time = (timeEnd - timeStart) / 1000;
  score++;
  updateVariables();
  showTime.innerHTML = time + "s";
  scoreCount.innerHTML = "Score: " + score;
}

function randomColor() {
  var color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}