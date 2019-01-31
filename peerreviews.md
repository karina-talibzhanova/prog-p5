# Peer Reviews

## Review 1
### Usability of Code
* where are the parameters????
* only has getters and setters
    * those could also be put in the constructor as things the user can setup when creating the object in the first place
    * this also means that it has no default values and everything must be manually changed
* getters and setters are good tho
* methinks it is reusable so yay!

The constructor is empty so there are no parameters. This means that when creating an object, the user cannot set the parameters of the object and they are obliged to do so through the getters and setters. This also means that there are no default values for the parameters. However, there are appropriate getters and setters, and the component as a whole is reusable.

### Development of Original
* original was submitted
* definitely in a class
* ......... there are no parameters, only getters and setters
* extra things were added such as roman numerals, date, am/pm stuff so yay

The original code was submitted and the submitted code was successfully converted into a class. Though the constructor is empty, the values from the getters and setters are used in the code to change attributes such as the clock face colour. The scope was extended well by adding the current date, and whether it is AM/PM. There is also the option to change the number system from numbers to Roman Numerals.

### Quality of Example
* mostly valid, just a few instances of using 'align' when that is now deprecated and CSS should be used instead
* intuitive to use
* form controls are pretty good
    * wish i could individually change the text colours but oh well
    * oh also, clock style and clock colour is the same thing so like...... why?
    * also if like.... i could change the colour to anything i want, that would be cool

The form controls are very good and intuitive to use. The HTML is mostly valid - there are some instances of 'align' being used, which is now deprecated and should be replaced using CSS instead. The main criticism I have with the example is the fact that I am restricted to set colours for the text and clock colour. It would have been preferable to be able to choose your own colours. Additionally, I think it would have been a better user experience if it were possible to individually change the text colour of a clock.

### Quality of Documentation
* just tells me that there are getters/setters/functions
    * don't know what values to pass for functions. string? int? bool? who knows
* if i knew nothing about p5, i would not be able to use this class with its documentation
* good acknowledgement of source tho and licensing and libraries used and stuff

The documentation clearly describes the nature of the component and acknowledges the source of the original sketch, the licensing the sketch and the component follow, and the libraries used. It also lists all the getters and setters within the class so it is clear which parts of the object can be modified. However, it would be better if it was explicitly stated in the documentation what kind of values the parameters take (e.g. integer, string, bool, etc.). Additionally, while the p5 libraries are mentioned, I think it would be difficult for a user to be able to use this class for their own use if they are unaware of how p5 works (i.e. function setup() and function draw() being necessary for the object to work as expected).

### Code Quality
* jesus i hate the var foo, bar, etc; thing but like, i get the original person did that. it just seems kinda lazy tho
* mixture of single and double quotes. pick one and stick with it
* comments are okay, wouldn't mind a bit more information but otherwise, i understand what each bit does so
* passes linter otherwise

The code is mostly valid, however there are instances of a mixture of single and double quotes being used. This is the only case of inconsistency in the style of the code. The comments, while short, easily convey what the purpose of the section of code beneath is and make it easy to understand how the code works at a glance.


## Review 2
### Usability of Code
* nice parameters, good constructor and good default values
    * bit annoyed that theta has to be a global variable but everything breaks if it isn't so i guess that's okay?
* problem with setOverdrive tho
    * if user does not have a checkbox, they are restricted to 2 values - 10 or 30
    * don't think it should be dictated by a bool. just let the user set overdrive to whatever they like

The constructor contains appropriate parameters that all have good default values. The component is certainly reusable and would be easy to implement by a user. However, the parameter 'overdrive' restricts the user to two values because it only takes boolean values. If the user wanted a different value for 'overdrive', they would have to modifiy the class itself, or just accept the two given values. As a minor point, I find it a bit odd that 'theta' is a global variable outside the class but it appears that the code does not work without it.

### Development of Original
* yes, original was submitted as .js file, and also linked to original sketch in documentation so thanks my dude
* ngl, it wasn't really developed much. like.... scope-wise. it does the same stuff, just now you can fiddle with the values
    * i mean technically, overdrive is a new thing so that's nice
* was translated from processing to p5 javascript so that's good

The original sketch was both submitted as a .js file and also linked to in the documentation. The original was written in Processing so the translation into JavaScript was very well done, as was the refactorisation into a class. All useful properties were parameterised. There was one added property ('overdrive') so the scope was not extended by a lot, though work was done in this area.

### Quality of Example
* valid html!!!
* nice sliders, very good
* except, frequency and wavelength are the wrong way around
* also would be nice to modify 'overdrive' itself (also would prefer if it was renamed to amplitude... since that is what it is)

The example as a whole is pleasing to view and use. The HTML is valid and all the elements that modified the object's values worked well. However, I believe that 'Frequency' and 'Wavelength' are the wrong way around, and I would have also liked to be able to modify 'overdrive' (I also think it should have been renamed to 'amplitude').

### Quality of Documentation
* goddamn i love this documentation
* but like, tell me briefly what this component is and what p5 is and why you need p5 pls
* thank you for telling me what type your parameters take i love you so much
* hey they licensed it
* and they gave credit to original
* and also mentioned the js colour picker!
* i mean, i guess they explained their example?
* also, suggested improvements is not really needed in the documentation

All the parameters for the constructor are clearly explained and detail the type of value it takes, whether it is optional, and what the default value is if nothing is passed into that argument. The methods are also clearly explained as well as their parameters. Additionally, the documentation shows how to actually set up and use their component through a short example at the very beginning. It would have been nice if it was stated obviously that p5 libraries are necessary for it to work, otherwise the user must infer this from the rest of the documentation.

The explanation of the example was not written in depth but it does state how the HTML document interacts with the JavaScript code. There is a section on suggested improvements but I think this is unnecessary and does not belong in the documentation. Finally, they acknowledged where they got certain components and the relevant licensing.

### Code Quality
* passed the linter so all good there
* relevant comments so yay

There were no issues when examined by the linter. There are also relevant comments.


## Review 3
### Usability of Code
* yay they have a constructor and default values!
* they have getters and setters, which is niiiiice
    * but then they also have their own set function? if you have proper getters and setters, these are irrelevant
* draw is a function that they have
* ffs their background, rectangle, and outline colours are tied to their sliders
    * not properly parameterised so user would either have to modify the code or make sure they are definitely using rgb

The constructor has appropriate parameters as well as default values. The code also contains getters and setters for each of these values, however, there are duplicate set functions (e.g. changeSpeed) that are unnecessary when there already are setters. Additionally, the parameter 'backgroundColour' is seen in the constructor but it does not have its own getter and setter. Also, the getters will always return None because there is no variable called '_numb' for example, only 'numb'. A quick fix would be to just rename the variables in the constructor (e.g. 'this.numb' becomes 'this._numb'). Finally, the background, rectangle, and outline colours can be changed in the 'draw' function of the class. Because they are linked to the RGB sliders, this makes the component not reusable as a user will need to modify the code (although I believe simply deleting those 3 lines would solve this issue).

### Development of Original
* original code was submitted, yes
* original was written in processing so good job on translating that into javascript
* definitely stuck it in a class
* definitely was parameterised
* i'll be honest, the scope was not exactly extended. the final submission basically does the same as the original sketch

The original code was submitted and was written in Processing. The submitted code was well translated into JavaScript, and while it was refactored into a class and parameterised, it technically is not reusable in the current state it is in. The scope was not particularly extended as it has exactly the same funcitonality as the original sketch.

### Quality of Example
* jesus christ my eyes burn
    * don't use comic sans you moron
* also the actual page size is too big for my screen? so i can scroll and stuff? curious
* also, don't use the same id multiple times in the page! it's supposed to be unique! use a class instead!
* and like, your class and your index.js need to be in separate files
* form controls are intuitive to use
    * would prefer if values were updated as sliders were moved, and not when slider is released
        * this is where getters and setters come in handy
        * this is also where loop() and noLoop() functions in p5 are useful
* rgb sliders are good but like..... is there really a need to be able to drag them
    * also, personal preference, but i prefer colour pickers as opposed to picking rgb values. it's an easier user experience

The HTML has some problems with its validity as the same id is used multiple times when a class should be used instead. Additionally, because the canvas is given a fixed size, it presents as too large on some screens and results in scrollbars that are somewhat annoying. The form controls are intuitive to use and they certainly work in changing the attributes of the class, though it is annoying that the values are not updated live (i.e. the attributes only change when the slider is released, not while the slider is moving). Also, I believe colour pickers tend to result in an easier user experience than RGB sliders. Finally, just don't use Comic Sans.

### Quality of Documentation
* acknowledged source and licensing
* not really necessary to say it's a summative but it doesn't detract from the actual content so
* don't care about your github commits and how often you pushed to the repo
    * actual users (not compsci students) don't care. they just want a working piece of code with adequate documentation
* also general overview  of component is a bit wishy washy.
* you haven't told me that you need to use p5 so??? i wouldn't know that i would need it???? and my code using your component wouldn't work???????????
* bruh idk what kinda values to put in your constructor? int? str? bool? it's a mystery
* also wouldn't know how to implement this since idk i need function setup() and function draw()
* TELL ME ABOUT P5 FFS
* i mean, you do tell me about the properties your class can take but like.... see above

All relevant sources were acknowledged along with their respective licensing. The component's purpose is also explained.

Nowhere in this documentation is p5 mentioned. This means that a user with no knowledge of p5 would not be able to get this code working with theirs and they would be forced to do extra research by following the links in the documentation to openprocessing and infering from there that they need to use the p5 libraries. Additionally, there is an entire chunk showing GitHub commits which is unnecessary as all a user wants is a working piece of code with adequate documentation. While the constructor is described in terms of the parameters it takes and what they change, there is no mention of what kind of values are required. It's possible to deduce for some of the arguments that they require an integer input, but the rest are not explicitly stated. A similar problem is found in the explanation of the methods (the setters).

The example is explained in that the purpose of the sliders is detailed. It was good to see the maximum and minimum values being stated where appropriate.

### Code Quality
* mostly passes linter
    * one instance of mixed tabs and spaces
    * also, entire code block in draw method should be indented
* commenting is pretty good
    * a bit confusing on lines 132 - 144

The code mostly passes the linter, though there appears to be one instance of mixed tabs and spaces. Additionally, the entire code block in the 'draw' method should be indented. The comments in the code are well written and concise, though there on lines 132-144, they are slightly confusing.