(function(){
	Object.prototype.theremize = function(options){
		let _ = window.AudioContext || window.webKitAudioContext,
			ctx = new _(),
			g = ctx.createGain(),
			o = ctx.createOscillator(),
			startFreq = options && options.start || 30;

		o.type = options && options.wave || 'sine';
		o.frequency.value= startFreq;
		o.start();
		o.connect(g);
		g.connect(ctx.destination);
		g.gain.value = 0;

		this.theremin = {
			start: () => {
				this.addEventListener('mousemove', playTheremin);
			},
			stop: () => {
				this.removeEventListener('mousemove', playTheremin);
				g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
			},
			freq: (f) => {
				startFreq = f;
			},
			wave: (w) => {
				o.type = w;
			}
		}

		function playTheremin(e){
			if(this.nodeName == '#document'){
				o.frequency.value = innerHeight + startFreq - e.pageY;
				g.gain.value = e.pageX / (innerWidth*1.5);
			}
			else{
				let h = this.offsetHeight + this.offsetTop + startFreq,
						w = this.offsetWidth + this.offsetLeft;
				g.gain.value = (this.offsetWidth - (w - e.pageX)) / this.offsetWidth;
				o.frequency.value = h - e.pageY;
			}
		}
	}
 })();
