let about = document.getElementById("about");
let bodyArray = document.getElementsByTagName("BODY");
let body = bodyArray[0];

document.addEventListener("click", whenClicked);

about.addEventListener("mouseover", whenHovering);

about.addEventListener("mouseout", whenNotHovering);

function whenClicked() {
	let newHeading = document.createElement("h1");
	newHeading.innerHTML = "Kristian Ofori";
	about.appendChild(newHeading);
}
function whenHovering() {
	body.style.color = "blue";
}
function whenNotHovering() {
	body.style.color = "orange";
}
