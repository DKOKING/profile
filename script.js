let about = document.getElementById("about");

about.addEventListener("click", whenClicked);

function whenClicked(){
	let newHeading = document.createElement("h1")
	newHeading.innerHTML = "Kristian Ofori";
	about.appendChild(newHeading)
}
