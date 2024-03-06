// text scramble
// classes container and scramble
let interval;

const element = document.querySelector(".scramble");
const originalText = element.innerText;

const randomInt = (max) => Math.floor(Math.random() * max);
const randomFromArray = (array) => array[randomInt(array.length)];

// *>⋆&@#✧.%$-_:/✿;?!
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
	"would love to chat",
	"°❀⋆.ೃ࿔*:･",
	"and dreaming",
	"addicted to sauerkraut chips",
	"what are you up to?",
	"xoxo",
	":)",
	"best wishes",
	"𓆝⋆｡˚𓆟 𓆞⋆｡˚•𓆝 ⋆⭒𓆟",
];
// ❦ , ♥ , ♡ , ❤︎ , ✿ , ₊ ⊹ , °❀⋆.ೃ࿔*:･
// ⋆𓆟⋆｡˚𓆝 𓆟 ⋆⭒𓆟⋆｡˚𖦹𓆜✩⋆𓆞⋆𓆟
// 	"⋆⭒𓆟⋆𓆝⋆｡˚𓆟 𓆞⋆｡˚⭒𓆝 ⋆𓆟",
// "you found me", 	"and snacking",
// ":p",
// ":0",

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

// Copy Email
function copyEmail() {
	// Get the text field
	var copyText = document.getElementById("email");

	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);

	// Alert the copied text
	// alert("Copied email: " + copyText.value);
}

// Click event handler for copying email
$("button#copyEmail").click(function () {
	copyEmail();
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
