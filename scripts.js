var assets = {
	1: "images/Evening/homework.png",
	2: "images/Evening/backpack.png",
	3: "images/Evening/sackLunch.png",
	4: "images/Evening/freeTime.png",
	5: "images/Evening/5min.png",
	6: "images/Evening/changed.png",
	7: "images/Evening/bathroom.png",
	8: "images/Evening/teeth.png",
	9: "images/Evening/bedtime.png"
} 

function time(){
	var d = new Date();

	var hour;
	var minute;
	var second;


	if(d.getHours() > 12){
		hour = d.getHours() - 12;
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


	document.querySelector("#time").innerHTML = hour + ':' + minute + '<span id="secs">  ' + second + '</span>';
}

function flipOut(){
	document.querySelector("#task").classList += "animated flipOutX";
	console.log(this);
}

var taskCounter = 1;

for(var i = 1; i <= 9; i++){
	document.getElementById(i).style.backgroundImage = "url(" + assets[i] +")";
	document.getElementById(i).style.backgroundSize = "cover";
};

setInterval(time, 1000);
document.querySelector("#task").addEventListener("click", flipOut);