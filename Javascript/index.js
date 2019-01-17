
var time_period = document.getElementById("time_period");

time_period.oninput = function() {
    noLoop();
    obj.timePeriod = this.value;
    loop();
};


var wavelength = document.getElementById("wavelength");

wavelength.oninput = function() {
    noLoop();
    obj.wavelength = this.value;
    loop();
};

var wave_text = document.getElementById("wave_text");

wave_text.oninput = function() {
    noLoop();
    obj.text = this.value;
    loop();
};


var text_size = document.getElementById("text_size");

text_size.oninput = function() {
    noLoop();
    obj.size = parseInt(this.value);
    loop();
};


var background_col = document.getElementById("background_col");

background_col.oninput = function() {
    noLoop();
    obj.backgroundColor = this.value;
    loop();
};

var obj;
var pg;
var canvas;

function setup() {
	canvas = createCanvas(600, 600);
	canvas.parent("test");
	pg = createGraphics(600, 600);
	obj = new StringWave("Hello World!");
}

function draw() {
	obj.draw(pg);
	image(pg, 0, 0);
}