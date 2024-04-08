// text scramble
let interval;

const element = document.querySelector(".scramble");
const originalText = element.innerText;

const randomInt = (max) => Math.floor(Math.random() * max);
const randomFromArray = (array) => array[randomInt(array.length)];

// *>⋆&@#✧.%$-_:/✿;?!
// hardatwork; stillhere
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

// text scramble for the larger screen
let scrambleInt;

const scrambleEle = document.querySelector(".scramble-2");
const prescrambleText = scrambleEle.innerText;

const scrambleRandomInt = (max) => Math.floor(Math.random() * max);
const scrambleRandomFromArray = (array) =>
	array[scrambleRandomInt(array.length)];

// *>⋆&@#✧.%$-_:/✿;?!
// hardatwork; stillhere
const postScrambleText = (text) => {
	const scrambleChars = "hardatwork".split("");
	return text
		.split("")
		.map((x) =>
			scrambleRandomInt(3) > 1 ? scrambleRandomFromArray(scrambleChars) : x
		)
		.join("");
};

scrambleEle.addEventListener("mouseover", () => {
	scrambleInt = setInterval(
		() => (scrambleEle.innerText = postScrambleText(prescrambleText)),
		100
	);
});

scrambleEle.addEventListener("mouseout", () => {
	clearInterval(scrambleInt);
	scrambleEle.innerText = prescrambleText;
});

// heart
// Get the span element by its ID
const textSpan = document.getElementById("textSpan");
// const textSpan2 = document.getElementById("textSpan2");

// Define the text to change to on hover
const newText = "⋆⁺₊⋆♥︎⋆⁺₊⋆";
// const newText2 = "investigation *✩‧˚";

// Add event listeners for mouseenter and mouseleave events
textSpan.addEventListener("mouseenter", () => {
	textSpan.textContent = newText;
});
// textSpan2.addEventListener("mouseenter", () => {
// 	textSpan2.textContent = newText2;
// });

textSpan.addEventListener("mouseleave", () => {
	textSpan.textContent = "and investigation.";
});
// textSpan2.addEventListener("mouseleave", () => {
// 	textSpan2.textContent = "investigation";
// });

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
// endless, rotation, who are you
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
	"let's talk music, food, and artist spaces",
	"let's exchange playlists",
	"exploring galleries, museums, and fairs",
	"last seen reading WEBTOONS",
	"last seen watching The Bear",
	"last seen folding fortune tellers",
	"last seen eating ramen",
	"last seen collecting stickers",
	"are you up for matcha?",
	"wanna grab a cup of coffee?",
	"are you good to go on a stationery tour?",
	"looking for typefaces",
	"can spend all day browsing books",
	"what's your daylist?",
	"doing yoga",
	"at an aerial class",
	"learning reiki",
	"baking cookies",
	"sampling fragrances",
	"brewing tea",
	"last seen updating this status",
	"testing pens",
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
