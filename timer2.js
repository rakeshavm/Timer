var TIMER= (function () {
	var daydisp, hrdisp, mindisp, secdisp;
	var current, destination,t;
	var timer;

	function sel(d) {
		return document.querySelector(d);
	}

	function doMath() {
		return {
			seconds: Math.floor((t / 1000) % 60),
			minutes: Math.floor((t / 1000 / 60) % 60),
			hours: Math.floor((t / (1000 * 60 * 60)) % 24),
			days: Math.floor(t / (1000 * 60 * 60 * 24))
		}
	}

	function render(genesis){
		 daydisp.innerHTML=genesis.days+ "<br> days";
		 hrdisp.innerHTML = genesis.hours + "<br> hours";
		 mindisp.innerHTML = genesis.minutes + "<br> min";
		 secdisp.innerHTML = genesis.seconds + "<br> sec";
	}

	function updateClock(){
		if(!(t>0)){
			 clearInterval(timer);
			 return ;
		}
	 t-=1000;
	 render(doMath());
	}

	function getCurrentTime() {
		return new Date();
	}


	function init(date, day, hour, min, sec) {
		daydisp = sel(day);
		hrdisp = sel(hour);
		mindisp = sel(min);
		secdisp = sel(sec);
		destination = date;
		current = getCurrentTime();
		t = destination - current;
		timer = setInterval(updateClock, 1000);

	}


	return {
		initialize: init
	}
})();
TIMER.initialize(new Date(2019,2,7),"#dayspan","#hrspan","#minspan","#secspan");