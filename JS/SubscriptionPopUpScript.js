// Get the modal
var pop = document.getElementById("pop");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function showSub() {
  pop.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function showSub() {
  pop.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == pop) {
    pop.style.display = "none";
  }
}