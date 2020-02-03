var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		if(colors[i])
		{
			square[i].style.background = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
			square[i].style.background = colors[i];
			square[i].style.display = "block";
	}
})

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";

	messageDisplay.textContent = "";

	for(var i = 0; i < square.length; i++)
{
	square[i].style.background = colors[i];
}

	h1.style.background = "steelblue";
})

for(var i = 0; i < square.length; i++)
{
	square[i].style.background = colors[i];

	square[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again ?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	})
}

function changeColors(color){
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

