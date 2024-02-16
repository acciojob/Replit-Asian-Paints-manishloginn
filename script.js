//your JS code here. If required.
document.querySelector("#change_button").addEventListener("click", () => {
  const blockInput = document.querySelector("#block_id").value;
  const colorInput = document.querySelector("#colour_id").value;
 
  document
    .querySelectorAll(".grid-item")
    .forEach((e) => (e.style.backgroundColor = "transparent"));
 
  const selectedGrid = document.getElementById(blockInput);
  if (selectedGrid) {
    selectedGrid.style.backgroundColor = colorInput;
    selectedGrid.style.transition = "all 0.5s ease-in-out";
  }
});
 
document.querySelector("#reset_button").addEventListener("click", () => {
  document
    .querySelectorAll(".grid-item")
    .forEach((e) => (e.style.backgroundColor = "transparent"));
});