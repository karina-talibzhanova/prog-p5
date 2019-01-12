class StringWave {
    constructor(user_text, user_background, user_size, user_time, user_wavelength){
		this.t = user_text; // actual text
		this.angle = 0; // this has something to do with how the text moves
		this.hue = 0; // changes start colour
		this.text_size = user_size || 70;
		this.time_period = user_time || 0.15;
		this.string_wavelength = user_wavelength || 800;
		this.background_color = user_background || 0;
	}
	
	get text() {
		return this.t;
	}

	set text(value) {
		this.t = value;
	}


	get timePeriod() {
		return this.time_period;
	}

	set timePeriod(value) {
		this.time_period = value;
	}


	get size() {
		return this.text_size;
	}

	set size(value) {
		this.text_size = value;
	}


	get wavelength() {
		return this.string_wavelength;
	}

	set wavelength(value) {
		this.string_wavelength = value;
	}


	get backgroundColor() {
		return this.background_color;
	}

	set backgroundColor(value) {
		this.background_color = value;
	}


    draw(pg){
		pg.background(this.background_color);

		pg.colorMode(HSB);
		
		pg.textSize(this.text_size); // text size/height measured in pixels
		let startX = (pg.width - pg.textWidth(this.t)) / 2;
		let currentX = startX;
		let a = this.angle;
		if (frameCount % 5 == 0) {
			this.hue = (this.hue + 5) % 360; //this bit just changes the colour of the text so it cycles in a rainbow fashion
		}
		
		// this bit monitors the user's mouse to determine how wavy and fast it should move
		for (let i = 0; i < this.t.length; i++) {
			let chr = this.t.charAt(i);
			let y = pg.height / 2 + (sin(a) * mouseY); // this bit makes it super duper wavy
			pg.fill(this.hue, 100, 100, 0.8); // so i think it just redraws each letter and colours it in with the hue calculated earlier (h) ? HSB vals + opacity
			pg.text(chr, currentX, y); //displays the character at a certain coordinate
			currentX += pg.textWidth(chr);
			a += mouseX / this.string_wavelength; //this changes how 'wavy' the sine wave is. bigger numbers means flatter sine wave i.e. basically the period of the wave
		}
		
		this.angle -= this.time_period; //this changes the time period of the wave. bigger numbers means faster wave. good values are between 0.05 and 0.3

	}
}