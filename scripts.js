var assets = {
	1: "images/Evening/homework.png",
	2: "images/Evening/backpack.png",
	3: "images/Evening/sackLunch.png",
	4: "images/Evening/freeTime.png",
	5: "images/Evening/changed.png",
	6: "images/Evening/bathroom.png",
	7: "images/Evening/teeth.png",
	8: "images/Evening/bedtime.png",
	9: "images/Evening/youdidit.png",
	done: "images/Evening/done.png"
} 
//function to get the time
function time(){
	var d = new Date();

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
	}}
//function to set the clock on the page
function setClock(){
	time();
	document.querySelector("#time").innerHTML = hour + ':' + minute + '<span id="secs">  ' + second + '</span>';
}
//function to set the time for the end if individual tasks
function addTime(timeAdd){
	var newMin = parseInt(minute) + 1 + timeAdd;

	var timedHour;
	var timedMin;

	if(newMin >= 120){
		timedHour = hour + 2;
		timedMin = newMin-120;
	}
	else if(newMin >= 60){
		timedHour = hour + 1;
		timedMin = newMin-60;
	}
	else {
		timedHour = hour;
		timedMin = newMin;
	}

	if(timedMin < 10){
		timesArray.push(timedHour + ":0" + timedMin);
	}
	else {
		timesArray.push(timedHour + ":" + timedMin);
	}}
//fucntion to set the countdown and set the card in the left taskbar
function setCountdown(){

	if (countdownSec == 0){
		countdownMin --;
		countdownSec = 59;
	}
	else {
		countdownSec --;
	}

	document.querySelector("#timer").innerHTML = countdownMin + "mins " +countdownSec + "secs";

	if (countdownMin == 5 && countdownSec == 0){
		document.querySelector("#hurry").play();
	}

	if (countdownMin == 0 && countdownSec == 0){
		document.querySelector("#ohno").play();
		location.reload();
	}
	//set card in left sidebar
	setTaskNow();
	}
//function to set the all the times of the tasks in the left sidebar
function setTimes(){
	var taskList = [].slice.call(document.querySelectorAll(".timeCalc"));

	//homework 15mins
	addTime(15);
	//pack backpack 5mins
	addTime(20);
	//sack lunch 10mins
	addTime(30);
	//freetime 15mins
	addTime(45);
	//get changed 5mins
	addTime(50);
	//bathroom 5mins
	addTime(55);
	//brush teeth 5mins
	addTime(60);
	//go to bed 5mins
	addTime(65);

	//push values to tasklist
	for(var j = 0; j < taskList.length; j++){
		taskList[j].innerHTML = timesArray[j];
	}

	// set timer countdown
	setCountdown();
	setInterval(setCountdown, 1000);
}
//function to create and animate confetti when tasks are complete
function confetti(){
	var wrapper = document.querySelector("#canvasWrapper");
	//play sound
	document.querySelector("#cheer").play();
	//create canvas
	wrapper.innerHTML = '<canvas id="canvas" width="700" height="560"></canvas>';
	//move canvas wrapper to main part of screen
	wrapper.style.width = "700px";
	wrapper.style.height = "560px";
	wrapper.style.margin = "0 auto";
	wrapper.style.marginTop = "-520px";
	wrapper.style.zIndex = "-100";

	var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");

	var colorArray = ["hotpink", "red", "lightblue", "goldenrod", "purple", "white"];
	//create confetti
	function single(x, y, color){

		c.beginPath();
		c.moveTo(x,y);
		c.lineTo(x+5,y+5);
		c.strokeStyle = color;
		c.lineWidth = 10;
		c.stroke();
	}
	single(100,100,"red");

	var conf = {
		0: {
			y: Math.round(Math.random() * 20)
		},
		1: {
			y: Math.round(Math.random() * 20)
		},
		2: {
			y: Math.round(Math.random() * 20)
		},
		3: {
			y: Math.round(Math.random() * 20)
		},
		4: {
			y: Math.round(Math.random() * 20)
		},
		5: {
			y: Math.round(Math.random() * 20)
		},
		6: {
			y: Math.round(Math.random() * 20)
		},
		7: {
			y: Math.round(Math.random() * 20)
		},
		8: {
			y: Math.round(Math.random() * 20)
		},
		9: {
			y: Math.round(Math.random() * 20)
		},
		10: {
			y: Math.round(Math.random() * 20)
		},
		11: {
			y: Math.round(Math.random() * 20)
		},
		12: {
			y: Math.round(Math.random() * 20)
		},
		13: {
			y: Math.round(Math.random() * 20)
		},
		14: {
			y: Math.round(Math.random() * 20)
		},
		15: {
			y: Math.round(Math.random() * 20)
		},
		16: {
			y: Math.round(Math.random() * 20)
		},
		17: {
			y: Math.round(Math.random() * 20)
		},
		18: {
			y: Math.round(Math.random() * 20)
		},
		19: {
			y: Math.round(Math.random() * 20)
		},
		20: {
			y: Math.round(Math.random() * 20)
		}
	}

	//set inital random values for confetti in object
	for(var k = 0; k <= 20; k++){
		conf[k].x = Math.round(Math.random() * 1000);
		conf[k].color = colorArray[Math.round(Math.random() * 5)];	
	}

	function animate(){
			c.clearRect(0,0,700,560);
		for (var l = 0; l <= 20; l++){
			single(conf[l].x, conf[l].y, conf[l].color);
			single(conf[l].x-500, conf[l].y-50, conf[l].color);
			single(conf[l].x+500, conf[l].y-50, conf[l].color);
			single(conf[l].x-250, conf[l].y-75, conf[l].color);
			single(conf[l].x+250, conf[l].y-75, conf[l].color);
			single(conf[l].x, conf[l].y-150, conf[l].color);
			single(conf[l].x-400, conf[l].y-200, conf[l].color);
			single(conf[l].x+400, conf[l].y-200, conf[l].color);
			single(conf[l].x-150, conf[l].y-275, conf[l].color);
			single(conf[l].x+150, conf[l].y-275, conf[l].color);
			conf[l].y++;

		}
	}

	setInterval(animate, 1000/60);
	animate();
}

function switchCards(){
	var taskCard = document.querySelector("#task");
	//flip out current card
	taskCard.classList = "animated flipOutX";
	//play "yay!" sound
	document.querySelector("#yay").play();
	//flip current card to done in side panel
	document.getElementById(taskCounter).style.backgroundImage = "url(" + assets["done"] + ")";
	//increase card counter
		taskCounter++;
	
	//flip new card in
	//...first listen for the end of the flip out animation
	//...when it has ended start flip in animation
	// Code for Chrome, Safari and Opera
	taskCard.addEventListener("webkitAnimationEnd", function(){
		taskCard.style.backgroundImage = "url(" + assets[taskCounter] + ")";
		taskCard.classList = "animated flipInX";
	});
	// Standard syntax
	taskCard.addEventListener("animationend", function(){
		taskCard.style.backgroundImage = "url(" + assets[taskCounter] + ")";
		taskCard.classList = "animated flipInX";
	}); 
	
	
	if (taskCounter == 9 ) {
		confetti();
	}
}
//function to change individual task in left sidebar
function taskNow(picture){
	var taskNow = document.getElementById("taskNow");
	taskNow.style.backgroundImage = 'url(' + picture + ')';
	taskNow.style.backgroundSize = 'cover';
	taskNow.style.margin = '0 auto';
	taskNow.style.marginTop = '5px';
	taskNow.style.marginBottom	 = '5px';
}
//function to set the task in the left sidebar
function setTaskNow(){
	for (var m = 1; m < 10; m++ ){
		var time1 = taskTimes[m-1];
		var time2 = taskTimes[m];
			console.log(time1,time2,assets[1], countdownMin);
		if(countdownMin < time1 && countdownMin >= time2){
			taskNow(assets[m]);
			//console.log(time1, time2, assets[photoi]);
		}
}}
//array for task times
var taskTimes = [66, 51, 46, 36, 21, 16, 11, 6, 1];
//variables for the clock
var hour;
var minute;
var second;

var taskCounter = 1;

var timesArray = [];

var countdownMin = 65;
var countdownSec = 00;


for(var i = 1; i <= 9; i++){
	document.getElementById(i).style.backgroundImage = "url(" + assets[i] +")";
	document.getElementById(i).style.backgroundSize = "cover";
};
setClock();
setInterval(setClock, 1000);
document.querySelector("#task").addEventListener("click", switchCards);
document.querySelector("#timer").addEventListener("click", setTimes);
document.querySelector("button").addEventListener("click", function(){
	location.reload();
});

taskNow(assets[1]);
