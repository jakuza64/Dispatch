function Clock(speed) {

	this.currentTime = 0;
	this.speed = speed;

	//runs every frame
	this.iterate = function(delta) {
		this.currentTime += this.speed + delta;
	}

	//for the clock on screen
	this.humanizeCurrentTime = function() {
		//
		//this really needs to be more efficiently written, it runs every frame
		//
		let seconds = Math.floor(this.currentTime / 60);
		let minutes = Math.floor(seconds / 60);
		seconds = seconds % 60;
		let hours = 6 + Math.floor(minutes/60);
		minutes = minutes % 60;
		if (seconds < 10) seconds = '0' + seconds;
		if (minutes < 10) minutes = '0' + minutes;
		if (hours < 10) hours = '0' + hours;
		return hours + ':' + minutes + ':' + seconds;
	}
}