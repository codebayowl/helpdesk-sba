console.log('New scripts connected');
function rotate() {
	console.log("Click detected");
	document.querySelector(".cross").classList.toggle("rotate");
	console.log("Rotation OK");
	document.querySelector(".container").classList.toggle("hight-container-expanded");
	document.querySelector(".window").classList.toggle("hight-container-expanded");
	document.querySelector(".teaser-text").classList.toggle("height-text-expanded");
	document.querySelector(".teaser-details").classList.toggle("height-details-expanded");
	console.log("Height operations performed");
};
document.querySelector(".iwantmore").addEventListener("click", rotate);