
var time_period = document.getElementById("time_period");

time_period.oninput = function() {
    time_period.value = this.value;
    setup();
}



var obj;
var pg;
var canvas;

function setup(){
	canvas = createCanvas(600, 600);
	canvas.parent('test');
	pg = createGraphics(400, 400);
	obj = new StringWave("Hello World!", color(0, 0, 255), 70, time_period.value, 150.5);
}

function draw(){
	background('green');
	obj.draw(pg);
	image(pg, 0, 0);
}