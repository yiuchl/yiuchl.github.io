// text scramble
// classes container and scramble
let interval;

const element = document.querySelector(".scramble");
const originalText = element.innerText;

const randomInt = (max) => Math.floor(Math.random() * max);
const randomFromArray = (array) => array[randomInt(array.length)];

// *>⋆&@#✧.%$-_:/✿;?!
// 𓆝 𓆟 𓆞 𓆝 𓆟
const scrambleText = (text) => {
	const chars = "hardatwork".split("");
	return text
		.split("")
		.map((x) => (randomInt(3) > 1 ? randomFromArray(chars) : x))
		.join("");
};

element.addEventListener("mouseover", () => {
	interval = setInterval(
		() => (element.innerText = scrambleText(originalText)),
		100
	);
});

element.addEventListener("mouseout", () => {
	clearInterval(interval);
	element.innerText = originalText;
});

// Back to top!
// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});

// Change on click
const changeText = document.getElementById("footerUpdate");
const textOptions = [
	"excited to get to know you",
	"you found me",
	"would love to chat",
	"and snacking",
	"and dreaming",
	"see you soon",
	"how about you?",
	"xoxo",
];
//  on sauerkraut chips

function getRandomText() {
	const randomIndex = Math.floor(Math.random() * textOptions.length);
	return textOptions[randomIndex];
}

function changeRandomText() {
	changeText.textContent = getRandomText();
}

changeText.addEventListener("click", changeRandomText);

// Initialize draggable functionality for div elements
$(function () {
	$(".draggable-div").draggable({
		// Restrict dragging within the document
		containment: "document",
		// Change cursor to indicate draggable element
		cursor: "move",
	});
});

// Slides?
let slideIndex = [1, 1];
let slideId = ["slide1", "slide2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
	showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
	let i;
	let x = document.getElementsByClassName(slideId[no]);
	if (n > x.length) {
		slideIndex[no] = 1;
	}
	if (n < 1) {
		slideIndex[no] = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex[no] - 1].style.display = "block";
}
