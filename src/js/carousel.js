const allCarousels = document.querySelectorAll(".carousel-container");

let carouselIndexTracker = [];

function updateCarousel(desiredIndex, children, unupdatedIndex) {
	let desiredElement = children[desiredIndex];
	let elementToHide = children[unupdatedIndex];

	desiredElement.style.display = "block";
	elementToHide.style.display = "none";
}

allCarousels.forEach((carousel, index) => {
	const mediaChildren = Array.from(carousel.children);

	const leftArea = document.createElement("div");
	const rightArea = document.createElement("div");

	leftArea.classList.add("left-area");
	rightArea.classList.add("right-area");

	carousel.appendChild(leftArea);
	carousel.appendChild(rightArea);

	if (mediaChildren.length > 1) {
		mediaChildren.forEach((el, index) => {
			if (index > 0) {
				el.style.display = "none";
			}
		});
	}

	carouselIndexTracker.push(0);
	leftArea.addEventListener("click", () => {
		let unupdatedIndex = carouselIndexTracker[index];

		carouselIndexTracker[index] -= 1;

		let desiredIndex = carouselIndexTracker[index];

		if (desiredIndex < 0) {
			carouselIndexTracker[index] = mediaChildren.length - 1;
			desiredIndex = mediaChildren.length - 1;
		}
		updateCarousel(desiredIndex, mediaChildren, unupdatedIndex);
	});

	rightArea.addEventListener("click", () => {
		let unupdatedIndex = carouselIndexTracker[index];
		carouselIndexTracker[index] += 1;

		let desiredIndex = carouselIndexTracker[index];

		if (desiredIndex >= mediaChildren.length) {
			carouselIndexTracker[index] = 0;
			desiredIndex = 0;
		}

		updateCarousel(desiredIndex, mediaChildren, unupdatedIndex);
	});
});
