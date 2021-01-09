// Get the modal
var pop2 = document.getElementById("pop2");

// Get the button that opens the modal
var btn2 = document.getElementById("btn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function showSub2() {
  pop2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function showSub2() {
  pop2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == pop2) {
    pop2.style.display = "none";
  }
}