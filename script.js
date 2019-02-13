let about = document.getElementById("about");
let bodyArray = document.getElementsByTagName("BODY");
let body = bodyArray[0];
document.addEventListener("click", whenClicked);
document.addEventListener("mouseover", whenHovering);
document.addEventListener("mouseout", whenNotHovering);

function whenClicked() {
	let newHeading = document.createElement("h1");
	newHeading.innerHTML = "Kristian Ofori";
	about.appendChild(newHeading);
}
function whenHovering() {
	body.style.color = "orange";

}
function whenNotHovering() {
	body.style.color = "blue";
}
