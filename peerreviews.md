# Peer Reviews

## Review 1
### Usability of Code
* where are the parameters????
* only has getters and setters
    * those could also be put in the constructor as things the user can setup when creating the object in the first place
    * this also means that it has no default values and everything must be manually changed
* getters and setters are good tho
* methinks it is reusable so yay!

### Development of Original
* original was submitted
* definitely in a class
* ......... there are no parameters, only getters and setters
* extra things were added such as roman numerals, date, am/pm stuff so yay


### Quality of Example
* mostly valid, just a few instances of using 'align' when that is now deprecated and CSS should be used instead
* intuitive to use
* form controls are pretty good
    * wish i could individually change the text colours but oh well
    * oh also, clock style and clock colour is the same thing so like...... why?
    * also if like.... i could change the colour to anything i want, that would be cool

### Quality of Documentation
* just tells me that there are getters/setters/functions
    * don't know what values to pass for functions. string? int? bool? who knows
* if i knew nothing about p5, i would not be able to use this class with its documentation
* good acknowledgement of source tho and licensing and libraries used and stuff

### Code Quality
* jesus i hate the var foo, bar, etc; thing but like, i get the original person did that. it just seems kinda lazy tho
* mixture of single and double quotes. pick one and stick with it
* comments are okay, wouldn't mind a bit more information but otherwise, i understand what each bit does so
* passes linter otherwise


## Review 2
### Usability of Code
* nice parameters, good constructor and good default values
    * bit annoyed that theta has to be a global variable but everything breaks if it isn't so i guess that's okay?
* problem with setOverdrive tho
    * if user does not have a checkbox, they are restricted to 2 values - 10 or 30
    * don't think it should be dictated by a bool. just let the user set overdrive to whatever they like

### Development of Original
* yes, original was submitted as .js file, and also linked to original sketch in documentation so thanks my dude
* ngl, it wasn't really developed much. like.... scope-wise. it does the same stuff, just now you can fiddle with the values
    * i mean technically, overdrive is a new thing so that's nice
* was translated from processing to p5 javascript so that's good

### Quality of Example
* valid html!!!
* nice sliders, very good
* except, frequency and wavelength are the wrong way around
* also would be nice to modify 'overdrive' itself (also would prefer if it was renamed to amplitude... since that is what it is)

### Quality of Documentation
* goddamn i love this documentation
* but like, tell me briefly what this component is and what p5 is and why you need p5 pls
* thank you for telling me what type your parameters take i love you so much
* hey they licensed it
* and they gave credit to original
* and also mentioned the js colour picker!
* i mean, i guess they explained their example?
* also, suggested improvements is not really needed in the documentation

### Code Quality
* passed the linter so all good there
* relevant comments so yay


## Review 3
### Usability of Code
* yay they have a constructor and default values!
* they have getters and setters, which is niiiiice
    * but then they also have their own set function? if you have proper getters and setters, these are irrelevant
* draw is a function that they have
* ffs their background, rectangle, and outline colours are tied to their sliders
    * not properly parameterised so user would either have to modify the code or make sure they are definitely using rgb

### Development of Original
* original code was submitted, yes
* original was written in processing so good job on translating that into javascript
* definitely stuck it in a class
* definitely was parameterised
* i'll be honest, the scope was not exactly extended. the final submission basically does the same as the original sketch

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

### Code Quality
* mostly passes linter
    * one instance of mixed tabs and spaces
    * also, entire code block in draw method should be indented
* commenting is pretty good
    * a bit confusing on lines 132 - 144