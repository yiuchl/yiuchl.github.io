// text scramble
let interval;

const element = document.querySelector(".scramble");
const originalText = element.innerText;

const randomInt = (max) => Math.floor(Math.random() * max);
const randomFromArray = (array) => array[randomInt(array.length)];

// *>⋆&@#✧.%$-_:/✿;?!
// hardatwork
const scrambleText = (text) => {
	const chars = "".split("");
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

// Change text on click
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
	"♥︎",
	"always made with love",
	"best wishes",
	"𓆝⋆｡˚𓆟 𓆞⋆｡˚•𓆝 ⋆⭒𓆟",
];

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
		// Change cursor to indicate draggable eleent
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

// Dark mode
const modeSwitch = () => {
	let e = document.body;
	e.classList.toggle("darkMode");

	// Toggle footer spacer classes
	const footerSpacers = document.querySelectorAll(".footer-spacer");
	footerSpacers.forEach((spacer) => {
		spacer.classList.toggle("footer-spacer-darkMode");
	});

	// Toggle button visibility based on dark mode
	const colorChangeButton = document.getElementById("colorChange");
	if (e.classList.contains("darkMode")) {
		colorChangeButton.classList.add("hidden");
		document.querySelectorAll(".text-color-darkMode").forEach((element) => {
			element.classList.add("light-text");
		});
		document.querySelectorAll(".highlight-link").forEach((element) => {
			element.classList.add("darkModeHighlightLink");
		});
	} else {
		colorChangeButton.classList.remove("hidden");
		document.querySelectorAll(".text-color-darkMode").forEach((element) => {
			element.classList.remove("light-text");
		});
		document.querySelectorAll(".highlight-link").forEach((element) => {
			element.classList.remove("darkModeHighlightLink");
		});
	}
};
