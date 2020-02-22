// Animation Hamburger
const hamburger = document.querySelector(".hamburger");
const hamLines = document.querySelectorAll(".line");
const navList = document.querySelector(".nav-list");
hamburger.addEventListener("click", () => {
  hamLines.forEach((hamLine) => {
    hamLine.classList.toggle("change")
    navList.classList.toggle("change")
  });
});

// Smooth scroll effect
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// hover{

