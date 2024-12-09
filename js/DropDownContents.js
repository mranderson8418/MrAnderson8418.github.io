const input = document.getElementById("menuButton");
const dropdown = document.getElementById("dropDownMenu");

input.addEventListener("input", () => {
	dropdown.hidden = !dropdown.hidden;
});

input.addEventListener("touchstart", () => {
	dropdown.hidden = !dropdown.hidden;
});
