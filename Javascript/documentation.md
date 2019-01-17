# Documentation of StringWave

StringWave is a JavaScript component that produces a line of text that oscillates with varying amplitudes and frequencies, depending on the user's mouse position. This component was originally created by Pavel Kuprin on https://www.openprocessing.org and can be found [here](https://www.openprocessing.org/sketch/645694). It is licensed under [Creative Commons Attribution ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/)

This component requires the use of p5 libraries which can either be downloaded [here](https://p5js.org/download/) or linked to via the hosted file
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
```

## How to Use StringWave

### Methods and Parameters

StringWave contains two methods; `constructor()` and `draw()`. `constructor()` is called when you create the object and initialises it with the values you pass into it. `draw()` can then be called to actually draw the object.

#### `constructor` method

The `constructor` can take 5 arguments, the first of which is mandatory and the rest are optional. These arguments are as follows:
* `user_text` - the text that will be displayed. Must be given. Must be a string.
* `user_background` - the background colour of the canvas. Defaults to 0 if not specified. Can take the following values:
    * grayscale integer value from 0 to 255
    * named SVG/CSS colour string e.g. `'red'`
    * three-digit hexadecimal RGB notation e.g. `'#fae'`
    * six-digit hexadecimal RBG notation e.g. `'#222222'`
    * integer RGB notation e.g. `'rgb(0,255,0)'`
    * percentage RGB notation e.g. `'rgb(100%,0%,10%)'`
    * percentage RGBA notation e.g. `'rgba(100%,0%,100%,0.5)'`
    * p5 Color object e.g. `color(0, 0, 255)`
> for further information, refer to the [p5 reference page for `background`](https://p5js.org/reference/#/p5/background).
* `user_size` - the font size of the text, measured in pixels. Defaults to 70 if not specified. Must be an integer
* `user_time` - the time period of the wave. Defaults to 0.15 if not specified. Must be a number (good values are between 0.05 and 0.3)
* `user_wavelength` - the wavelength of the wave. Defaults to 800 if not specified. Must be a number (can be integer or float. Best values are in the hundreds)

The syntax is as follows: `object = new StringWave(user_text, [user_background, user_size, user_time, user_wavelength])`

#### `draw` method

The `draw` method takes one argument, which is optional. It can accept a renderer to be passed into it (read the [p5 reference page for `createGraphics` for more information](https://p5js.org/reference/#/p5/createGraphics)). This allows for it to be draw on a canvas that may already have other drawings on it. More information will be detailed in **Implementation Within a Webpage**.

The syntax is as follows: `object.draw([renderer])`

### Properties
It is also possible to change the following properties:
Property Name | Type | Range of Values | Description
--------------|------|-----------------|------------
`text` | string | any string input | the actual text that will be displayed
`backgroundColor` | integer in range (0, 255), string, function (see above) | see above | background colour of the canvas
`size` | integer | positive integers | font size of text
`timePeriod` | float | positive numbers | time period of the wave
`wavelength` | float | positive numbers | wavelength of the wave

### Implementation Within a Webpage

The p5 library requires there to be two JavaScript functions that will be called to draw your object.
```javascript
function setup() {
    .
    .
    .
}

function draw() {
    .
    .
    .
}

```

In the setup, you should create the canvas, the object, and optionally, the renderer. For example:

```javascript
// create global variables so they can be accessed in both functions
var obj;
var canvas;
[var pg;]

function setup() {
	canvas = createCanvas(600, 600); // create a canvas 600 x 600 (in pixels)
	canvas.parent('test'); // anchor it to an element in your html that has id "test"
	[pg = createGraphics(600, 600);] // create the renderer 600 x 600 (in pixels)
	obj = new StringWave("Hello World!"); // create the object that will be drawn on the renderer
}
```

Then in the draw function, you should call the draw method of the object. For example:

```javascript
function draw() {
	obj.draw(); // call the draw method
}
```

If you have created a renderer and want to pass it into the draw method, you should do the following:

```javascript
function draw() {
    obj.draw(pg); // call the draw method and give the renderer as an argument
    image(pg, 0, 0); // draws graphic created by renderer onto canvas. syntax is as follows: image(img, x-coord, y-coord)
}
```

Your HTML could then look like this:

```html
<!DOCTYPE html>
<html>
    <head>
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
        <script src = "stringwave.js"></script>   
    </head>

    <body>
        <h1>StringWave</h1>

        <div id = "test"></div> <!-- object will be displayed in this div box -->
        
    </body>
</html>
```

## Explanation of Example

### HTML

The body of the page contains a box that holds the properties that can be changed (text, text size, background colour, time period, wavelength) and a parent `div` that contains the results of the object. The properties are controlled by the following:

Property Name | Input Type | Description
--------------|------------|------------
Text | `text` | Changes the `text` property of the object
Text size | `number` | Changes the `size` property of the object
Background colour | `color` | Changes the `backgroundColor` property of the object
Time period | `range` | Changes the `timePeriod` property of the object
Wavelength | `range` | Changes the `wavelength` property of the object

### CSS

The CSS contains basic styling of the page. It controls the positioning of the elements within it and also the styling of the range sliders on the page.

### JavaScript

The JavaScript contains event listeners that will update a given property to the value the user has set it at. It also contains the `setup()` and `draw()` functions required by the p5 library in order to run and display the component.

Here is an example of an event listener:

```javascript
var wavelength = document.getElementById("wavelength");

wavelength.oninput = function() {
    noLoop();
    obj.wavelength = this.value;
    loop();
}
```
The variable `wavelength` is bound to the range slider in the HTML body. When there is an input, the relevant property is updated to the current value return by the range slider. The reason behind `noLoop()` and `loop()` is that `draw()` needs to stop being called as there are structural changes being made to the object.