function time(){
	var d = new Date();

	var hour;
	var minute;
	var second;


	if(d.getHours() < 10){
		hour = "0" + d.getHours();
	}
	else {
		hour = d.getHours();
	}
	if(d.getMinutes() < 10){
		minute = "0" + d.getMinutes();
	}
	else {
		minute = d.getMinutes();
	}
	if(d.getSeconds() < 10){
		second = "0" + d.getSeconds();
	}
	else {
		second = d.getSeconds();
	}


	document.querySelector("#time").innerHTML = hour + ":" + minute + ":" + second;
}
setInterval(time, 1000);