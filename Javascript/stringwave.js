//put canvas in predefined place on page (div). need to know how to control canvas (look on p5)
//ability to start and stop sketch

//string, int, float (between 0.05 and 0.3), int, string (rgb, rgba, hex)




class StringWave {
    constructor(user_text, user_background, user_size, user_time, user_wavelength){
		this.t = user_text; // actual text
		this.angle = 0; // this has something to do with how the text moves
		this.hue = 0; // changes start colour
		this.text_size = user_size || 70;
		this.time_period = user_time || 0.15;
		this.wavelength = user_wavelength || 800;
		this.background = user_background || 0;
    }

    draw(pg){
		pg.background(this.background);

		pg.colorMode(HSB);

		// // canvas size
		// // canvas colour
		// // text colour
		// // i think it would be easier for users to input hex codes for colours bc i cba with a colour picker or something
		// // actual text itself

		// // use sliders for stuff

		  // just changes the background colour of the whole page, not the canvas. probably can remove
		
		pg.textSize(this.text_size); // text size/height measured in pixels
		let startX = (pg.width - pg.textWidth(this.t)) / 2;
		let currentX = startX;
		let a = this.angle;
		if (frameCount % 5 == 0) {
			this.hue = (this.hue + 5) % 360; //this bit just changes the colour of the text so it cycles in a rainbow fashion
		}
		
		// // this bit monitors the user's mouse to determine how wavy and fast it should move
		for (let i = 0; i < this.t.length; i++) {
			let chr = this.t.charAt(i);
			let y = pg.height / 2 + (sin(a) * mouseY); // this bit makes it super duper wavy
			pg.fill(this.hue, 100, 100, 0.8); // so i think it just redraws each letter and colours it in with the hue calculated earlier (h) ? HSB vals + opacity
			pg.text(chr, currentX, y); //displays the character at a certain coordinate
			currentX += pg.textWidth(chr);
			a += mouseX / this.wavelength; //this changes how 'wavy' the sine wave is. bigger numbers means flatter sine wave i.e. basically the period of the wave
		}
		
		this.angle -= this.time_period; //this changes the time period of the wave. bigger numbers means faster wave. good values are between 0.05 and 0.3

	}
}

var obj;
var pg;
var canvas;

function setup(){
	canvas = createCanvas(600, 600);
	canvas.parent('test');
	pg = createGraphics(400, 400);
	obj = new StringWave("Hello World!",'rgba(0,0,0,0.5)', 70, 0.15, 100);
}

function draw(){
	background('green');
	obj.draw(pg);
	image(pg, 0, 0);
}