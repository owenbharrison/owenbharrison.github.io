function debug() {
	let elements = document.querySelectorAll("*");
	for (let elem of elements) {
		let r = 255 * Math.random();
		let g = 255 * Math.random();
		let b = 255 * Math.random();
		let rgb = `rgb(${r}, ${g}, ${b})`;
		elem.style.backgroundColor = rgb;
	}
}