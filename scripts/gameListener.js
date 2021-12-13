export function gameListener(node) {
	const handleClick = (event) => {
    console.log(event.key);
    // DO STUFF WITH THE KEY
    
		// if (!node.contains(event.target)) {
		// 	node.dispatchEvent(new CustomEvent("outclick"));
		// }
	};

	document.addEventListener("keypress", handleClick);

	return {
		destroy() {
			document.removeEventListener("keypress", handleClick);
		}
	};
}
