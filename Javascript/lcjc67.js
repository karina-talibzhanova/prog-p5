class StringWave {
    constructor(){

    }

    function draw(){
        background(0, 0.1); // just changes the background colour of the whole page, not the canvas. probably can remove
	
	textSize(70); // text size/height measured in pixels
	let startX = (width - textWidth(t)) / 2;
	let currentX = startX;
	let a = angle;
	if (frameCount % 5 == 0) {
		hue = (hue + 5) % 360; //this bit just changes the colour of the text so it cycles in a rainbow fashion
	}
	let h = hue;
	
	// this bit monitors the user's mouse to determine how wavy and fast it should move
	for (let i = 0; i < t.length; i++) {
		let chr = t.charAt(i);
		let y = height / 2 + (sin(a) * mouseY); // this bit makes it super duper wavy
		fill(h, 100, 100, 0.8); // so i think it just redraws each letter and colours it in with the hue calculated earlier (h) ? HSB vals + opacity
		text(chr, currentX, y); //displays the character at a certain coordinate
		h += 1;
		currentX += textWidth(chr);
		a += mouseX / 800; //this changes how 'wavy' the sine wave is. bigger numbers means flatter sine wave i.e. basically the period of the wave
    }
}