// text scamble
// classes container and scramble
let interval;

const element = document.querySelector('.scramble');
const originalText = element.innerText;

const randomInt = (max) => Math.floor(Math.random() * max);
const randomFromArray = (array) => array[randomInt(array.length)];

// *>⋆&@#✧.%$-_:/✿;?!
const scrambleText = (text) => {
	const chars = '*>⋆&@#✧.%-_:/;?!'.split('');
	return text
		.split('')
		.map((x) => (randomInt(3) > 1 ? randomFromArray(chars) : x))
		.join('');
};

element.addEventListener('mouseover', () => {
	interval = setInterval(
		() => (element.innerText = scrambleText(originalText)),
		100
	);
});

element.addEventListener('mouseout', () => {
	clearInterval(interval);
	element.innerText = originalText;
});

// Back to top!
// scroll to top functionality
const scrollUp = document.querySelector('#scroll-up');

scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});
