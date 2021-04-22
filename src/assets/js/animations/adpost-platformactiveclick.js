// Get the container element
var btnContainer = document.getElementsByClassName("category__options");

// Get all buttons with class="btn" inside the container
var imgs = btnContainer.getElementsById("img");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}