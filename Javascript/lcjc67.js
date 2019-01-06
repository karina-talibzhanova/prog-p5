class StringWave {
    constructor(){
		createCanvas(600, 600);
		colorMode(HSB);
		this.t = 'Hello World'; // actual text
		this.angle = 0; // this has something to do with how the text moves
		this.hue = 0; // changes start colour

    }

    draw(){
        // canvas size
		// canvas colour
		// text colour
		// i think it would be easier for users to input hex codes for colours bc i cba with a colour picker or something
		// actual text itself

		// use sliders for stuff

		
		background(0, 0.1); // just changes the background colour of the whole page, not the canvas. probably can remove
		
		textSize(70); // text size/height measured in pixels
		let startX = (width - textWidth(this.t)) / 2;
		let currentX = startX;
		let a = this.angle;
		if (frameCount % 5 == 0) {
			this.hue = (this.hue + 5) % 360; //this bit just changes the colour of the text so it cycles in a rainbow fashion
		}
		let h = this.hue;
		
		// this bit monitors the user's mouse to determine how wavy and fast it should move
		for (let i = 0; i < this.t.length; i++) {
			let chr = this.t.charAt(i);
			let y = height / 2 + (sin(a) * mouseY); // this bit makes it super duper wavy
			fill(h, 100, 100, 0.8); // so i think it just redraws each letter and colours it in with the hue calculated earlier (h) ? HSB vals + opacity
			text(chr, currentX, y); //displays the character at a certain coordinate
			h += 1;
			currentX += textWidth(chr);
			a += mouseX / 800; //this changes how 'wavy' the sine wave is. bigger numbers means flatter sine wave i.e. basically the period of the wave
		}
		
		this.angle -= 0.15; //this changes the time period of the wave. bigger numbers means faster wave. good values are between 0.05 and 0.3
	}
}

let obj = 0;

function setup(){
	obj = new StringWave();
}

function draw(){
	obj.draw();
}