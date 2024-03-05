// Star sticker
var e;
var elmnt;
var eventHold;
var holdTargetId;
var holdTarget;

const els = document.querySelectorAll(".circle");
els.forEach((name) => {
	console.log("els.forEach = " + name);
	dragElement(name);
});

const burs = document.querySelectorAll("#burst-12");
burs.forEach((name) => {
	console.log("burs.forEach = " + name);
	dragElement(name);
});

function dragElement(elmnt) {
	console.log("function dragElement() = " + elmnt);
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();

		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		console.log("function closeDragElement()");
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

// Color randomizer
let myColors = [
	"red",
	"deeppink",
	"orangered",
	"orange",
	"green",
	"olivedrab",
	"blue",
	"darkviolet",
	"mediumslateblue",
	"rgb(33, 33, 33)",
];

$("button").click(function () {
	let randomColor = myColors[Math.trunc(Math.random() * myColors.length)];
	$("p").css("color", randomColor);
});
