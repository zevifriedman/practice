const navbar = document.querySelector(".navbar"); // Select your navbar element
let previousScrollY = 0; // Store previous scroll position

window.addEventListener("scroll", function () {
  const currentScrollY = window.scrollY; // Get current scroll position
  const scrollUp = currentScrollY < previousScrollY; // Check if scrolling up

  if (scrollUp) {
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
  }

  previousScrollY = currentScrollY; // Update previous scroll position
});
