class StringWave {
    constructor(user_text, user_background, user_size, user_time, user_wavelength){
		this.t = user_text; // text that will be displayed
		this.angle = 0; // start angle
		this.hue = 0; // start colour
		this.text_size = user_size || 70;
		this.time_period = user_time || 0.15;
		this.string_wavelength = user_wavelength || 800;
		this.background_color = user_background || 0;
	}
	
	// properties of the object that can be modified by the user
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


	draw(pg) {

		// if given a renderer, do the following
		if (pg) {
			// will draw onto a renderer that will have to be displayed manually by the user
			pg.background(this.background_color);

			pg.colorMode(HSB);
			
			pg.textSize(this.text_size);
			let startX = (pg.width - pg.textWidth(this.t)) / 2; // starting x-coordinate of letters i.e. starts in the middle
			let currentX = startX;
			let a = this.angle;

			// changes the colour of the text so it cycles in a rainbow cycle
			if (frameCount % 5 == 0) {
				this.hue = (this.hue + 5) % 360;
			}
			
			// iterates through text string to focus on each letter one at a time
			for (let i = 0; i < this.t.length; i++) {
				let chr = this.t.charAt(i);
				// calculates y-coordinate based on user's mouse position and makes the the text follow a sine wave
				let y = pg.height / 2 + (sin(a) * mouseY);
				// colours the letter with the hue calculated. values are as follows: fill(hue, saturation, brightness, opacity)
				pg.fill(this.hue, 100, 100, 0.8);
				// displays the character at a certain coordinate
				pg.text(chr, currentX, y);
				currentX += pg.textWidth(chr);
				// defines the wavelength of the text wave
				a += mouseX / this.string_wavelength;
			}

			// time period of the wave
			this.angle -= this.time_period;


		}
		// if no renderer, do the following (will draw onto given canvas)
		else {
			// does the same as above, just draws onto given canvas instead of a renderer
			background(this.background_color);

			colorMode(HSB);
			
			textSize(this.text_size);
			let startX = (width - textWidth(this.t)) / 2;
			let currentX = startX;
			let a = this.angle;
			if (frameCount % 5 == 0) {
				this.hue = (this.hue + 5) % 360;
			}
			
			for (let i = 0; i < this.t.length; i++) {
				let chr = this.t.charAt(i);
				let y = height / 2 + (sin(a) * mouseY);
				fill(this.hue, 100, 100, 0.8);
				text(chr, currentX, y);
				currentX += textWidth(chr);
				a += mouseX / this.string_wavelength;
			}
			
			this.angle -= this.time_period;

		}
		
	}
}