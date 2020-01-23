function counter(tag, endValue, startValue, speed, step) {
	let value = parseInt(startValue);
	tag.innerHTML = value;
	var counterInterval = setInterval(function () {
		value += step; 
		tag.innerHTML = value;
		if(value > endValue) {
			tag.innerHTML = endValue;
			clearInterval(counterInterval);
		}
	}, parseInt(speed));
}