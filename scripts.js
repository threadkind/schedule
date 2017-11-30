var assets = {
	1: "images/Evening/homework.png",
	2: "images/Evening/backpack.png",
	3: "images/Evening/sackLunch.png",
	4: "images/Evening/freeTime.png",
	5: "images/Evening/5min.png",
	6: "images/Evening/changed.png",
	7: "images/Evening/bathroom.png",
	8: "images/Evening/teeth.png",
	9: "images/Evening/bedtime.png",
	10: "images/Evening/youdidit.png",
	done: "images/Evening/done.png"
} 

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

function setClock(){
	time();
	document.querySelector("#time").innerHTML = hour + ':' + minute + '<span id="secs">  ' + second + '</span>';}

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

function setCountdown(){
	if (countdownSec == 0){
		countdownMin --;
		countdownSec = 59;
	}
	else {
		countdownSec --;
	}

	document.querySelector("#timer").innerHTML = countdownMin + ":" +countdownSec;
}

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

function switchCards(){
	var taskCard = document.querySelector("#task");
	//flip out current card
	taskCard.classList = "animated flipOutX";
	//play "yay!" sound
	//document.querySelector("#yay").play();
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
	
	
	if (taskCounter == 10 ) {
		console.log("woohoo!");
	}

	
	//
	console.log(this);
}

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
