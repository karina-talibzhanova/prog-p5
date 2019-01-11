# Documentation of StringWave

StringWave is a JavaScript component that produces a line of text that oscillates with varying amplitudes and frequencies, depending on the user's mouse position. This component was originally created by Pavel Kuprin on https://www.openprocessing.org and can be found [here](https://www.openprocessing.org/sketch/645694). It is licensed under [Creative Commons Attribution ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/)

This component requires the use of p5 libraries which can either be downloaded [here](https://p5js.org/download/) or linked to via the hosted file
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
```

## How to Use StringWave

### Methods and Parameters
StringWave contains two methods; `constructor()` and `draw()`. `constructor()` is called when you create the object and initialises it with the values you pass into it. `draw()` can then be called to actually draw the object.

The `constructor` can take 5 arguments, the first of which is mandatory and the rest are optional. These arguments are as follows:
* `user_text` - the text that will be displayed. Must be given. Must be a string.
* `user_background` - the background colour of the canvas. Defaults to 0 if not specified. Can take the following values:
    * grayscale integer value from 0 to 255
    * named SVG/CSS colour string e.g. 'red'
    * three-digit hexadecimal RGB notation e.g. '#fae'
    * six-digit hexadecimal RBG notation e.g. '#222222'
    * integer RGB notation e.g. 'rgb(0,255,0)'
    * percentage RGB notation e.g. 'rgb(100%,0%,10%)'
    * percentage RGBA notation e.g. 'rgba(100%,0%,100%,0.5)'
    * p5 Color object e.g. color(0, 0, 255)
> for further information, refer to the [reference page for background](https://p5js.org/reference/#/p5/background).
* `user_size` - the font size of the text, measured in pixels. Defaults to 70 if not specified. Must be an integer
* `user_time` - the time period of the wave. Defaults to 0.15 if not specified. Must be a number (good values are between 0.05 and 0.3)
* `user_wavelength` - the wavelength of the wave. Defaults to 800 if not specified. Must be a number (can be integer or float. Best values are in the hundreds)


constructor(user_text, user_background, user_size, user_time, user_wavelength)

### Implementation Within a Webpage

## Example of Implementation

* give source of original sketch and acknowledge the license
* explain how the methods work and the parameters and stuff... and like various contexts or whatever
    * like, how pg means you gotta give it a canvas to draw on and it'll do the rest
    * and also how you need function setup() and function draw() and what to put in each
        * show an example of what you want in the docs plus explain what each component does (e.g. the image() function)
* explain the example
    * so like, what sliders do, maybe how they're passed to the setup() and draw() functions?