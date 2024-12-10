// const input = document.getElementById("menuButton");
// const dropdown = document.getElementById("dropDownMenu");

// input.addEventListener("input", () => {
// 	dropdown.hidden = !dropdown.hidden;
// });

// input.addEventListener("touchstart", () => {
// 	dropdown.hidden = !dropdown.hidden;
// });

const dropdown = document.getElementById("menuButton");
const dropdownButton = document.getElementById("dropDownMenu");

dropdown.addEventListener("click", () => {
	dropdownButton.classList.toggle("show");
});

document.addEventListener("touchstart", (event) => {
	if (!dropdown.contains(event.target) && dropdown.classList.contains("show")) {
		dropdown.classList.remove("show");
	}
});
