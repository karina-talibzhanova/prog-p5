//put canvas in predefined place on page (div). need to know how to control canvas (look on p5)
//ability to start and stop sketch






class StringWave {
    constructor(user_text){
		this.t = user_text; // actual text
		this.angle = 0; // this has something to do with how the text moves
		this.hue = 0; // changes start colour
		this.frameCount = 0; // how many time this.draw was called
    }

    draw(pg){
		pg.background(0);

		pg.colorMode(HSB);

		// // canvas size
		// // canvas colour
		// // text colour
		// // i think it would be easier for users to input hex codes for colours bc i cba with a colour picker or something
		// // actual text itself

		// // use sliders for stuff

		  // just changes the background colour of the whole page, not the canvas. probably can remove
		
		pg.textSize(70); // text size/height measured in pixels
		let startX = (pg.width - pg.textWidth(this.t)) / 2;
		let currentX = startX;
		let a = this.angle;
		if (this.frameCount % 5 == 0) {
			this.hue = (this.hue + 5) % 360; //this bit just changes the colour of the text so it cycles in a rainbow fashion
		}
		let h = this.hue;
		
		// // this bit monitors the user's mouse to determine how wavy and fast it should move
		for (let i = 0; i < this.t.length; i++) {
			let chr = this.t.charAt(i);
			let y = pg.height / 2 + (sin(a) * mouseY); // this bit makes it super duper wavy
			// if(y > pg.height){
			// 	y = pg.height/2;
			// }
			pg.fill(h, 100, 100, 0.8); // so i think it just redraws each letter and colours it in with the hue calculated earlier (h) ? HSB vals + opacity
			pg.text(chr, currentX, y); //displays the character at a certain coordinate
			h += 1;
			currentX += pg.textWidth(chr);
			// if(currentX > pg.width ){
			// 	currentX = startX;
			// }
			a += mouseX / 800; //this changes how 'wavy' the sine wave is. bigger numbers means flatter sine wave i.e. basically the period of the wave
		}
		
		this.angle -= 0.15; //this changes the time period of the wave. bigger numbers means faster wave. good values are between 0.05 and 0.3
		// pg.background('green');
		// pg.textSize(70);
		// pg.fill(h, 100, 100, 0.8);
		// pg.text(this.frameCount, 50, 50);

		this.frameCount += 1;

	}
}

var obj;
var pg;
var canvas;

function setup(){
	canvas = createCanvas(600, 600);
	canvas.parent('test');
	pg = createGraphics(400, 400);
	obj = new StringWave("Hello World!");
}

function draw(){
	background('green');
	obj.draw(pg);
	image(pg, 0, 0);
}