var fun = (function(){
	var daydisp = document.querySelector("#dayspan");
	var hrdisp = document.querySelector("#hrspan");
	var mindisp = document.querySelector("#minspan");
	var secdisp = document.querySelector("#secspan");
	var API = {
		remtime : function remtime(endtime){
		  	var t = Date.parse(endtime) - Date.parse(new Date());
		  	var seconds = Math.floor((t/1000) % 60);
		  	var minutes = Math.floor((t/1000/60) % 60);
		  	var hours = Math.floor((t/(1000*60*60)) % 24);
		  	var days = Math.floor(t/(1000*60*60*24));
		  	return {
		    'total': t,
		    'days': days,
		    'hours': hours,
		    'minutes': minutes,
		    'seconds': seconds
		  };
		},
		display : function displayClock(endtime){
			  function updateClock(){
			  var t = API.remtime(endtime);
			  daydisp.innerHTML = t.days + "<br> days";
			  hrdisp.innerHTML = t.hours + "<br> hours";
			  mindisp.innerHTML = t.minutes + "<br> min";
			  secdisp.innerHTML = t.seconds + "<br> sec";
			  if(t.total<=0){
			    clearInterval(timeinterval);
			  }
			}
			updateClock(); 
			var timeinterval = setInterval(updateClock,1000);
		}
	}
	return API;
})();
fun.display('January 15 2019 GMT+0530');