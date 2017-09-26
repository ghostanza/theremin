# theremin
### Description
Small set of functions that allow you to utilize the Web Audio API to turn a div (or the whole document) into a theremin-like experience.
When you initialize the theremin element and run `.theremin.start()`, it will add an event listener for `mousemove` that will create sounds as your mouse moves around the container.

Moving your mouse left to right in the container controls the volume. Moving up and down controls the pitch.

*Note*: The pitch range is determined by the height of your theremin. The taller the object, the larger the range.


## Basic setup
HTML:
```
<div id="theremin"></div>
```
JS:
```
load theremin.js and then...
let t = document.getElementById('theremin');
t.theremize();
t.theremin.start();
```

## Demo
A sample can be found [here on Codepen.io](https://codepen.io/nilbog/full/ZXLgMB/)

With your volume on, hover your mouse around inside the box to hear how it works. (*Note: full volume can be loud, so be careful*)

## Functions
### `Object.prototype.theremize(options)`
This function is responsible for setting up the object with the basic theremin setup and some additional functionality inside of the `.theremin` object that is created.

**Example A:**
```
let t = document.getElementById('theremin');
t.theremize();
```

**Example B:**
```
let t = document.getElementById('theremin');
t.theremize({ wave: 'triangle', start: 500 });
```

#### Options
- `wave`: controls the wave of the oscilator. This can be `'sine'`, `'triangle'`, `'sawtooth'`, or `'square'`
- `start`: determines the starting frequency of the theremin. This will be the frequency that is played when your mouse is on the bottom of the container.

### `.theremin.start()`
This sets up the eventListeners for the mousemove event inside the container.

**Example**:
```
let t = document.getElementById('theremin');
// initialize
t.theremize();

// start the listeners
t.theremin.start();
```

### `.theremin.stop()`
This removes the eventListeners for the mousemove event inside the container - effectively stopping the theremin from playing.

**Example**:
```
let t = document.getElementById('theremin');
// initialize
t.theremize();

// start the listeners
t.theremin.start();

// stop the listeners (possibly triggered after a "stop button" or something is clicked?)
t.theremin.stop();
```

### `.theremin.freq(number)`
This adjusts the current theremin's starting frequency (aka the frequency that will be played when you hover on the bottom of the theremin container).

**Example:**
```
t.theremin.freq(200)
```

### `.theremin.wave(type)`
This changes the wave type of the oscillator being used in the theremin.

**Example:**
```
t.theremin.wave('sine');
```

---
## TODO:
- Add more features for filtering the sounds, etc.
- Add a range option in the setup to determine the pitch range
