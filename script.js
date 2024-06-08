const navbar = document.querySelector(".navbar");
let previousScrollY = 0;

// Function to check if the current page is index.html
function isIndexPage() {
  return (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/exercises.html"
  );
}

// Add scroll event listener conditionally based on the page
if (!isIndexPage()) {
  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;
    const scrollUp = currentScrollY < previousScrollY;

    if (scrollUp) {
      navbar.classList.remove("scrolled");
    } else {
      navbar.classList.add("scrolled");
    }

    previousScrollY = currentScrollY;
  });
}

document.addEventListener("mousemove", function (event) {
  var viewportHeight = window.innerHeight;
  var y = event.clientY;

  var nextButton = document.querySelector(".next-exercise");
  var prevButton = document.querySelector(".previous-exercise");

  var buttonHeight = 100; // גובה הכפתורים בפיקסלים

  if (nextButton) {
    if (viewportHeight - y <= buttonHeight) {
      nextButton.style.transition =
        "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

      nextButton.style.opacity = "1";
      nextButton.style.transform = "translateY(-20px)";
    } else {
      nextButton.style.opacity = "0";
      nextButton.style.transform = "translateY(20px)";
    }
  }

  if (prevButton) {
    if (viewportHeight - y <= buttonHeight) {
      prevButton.style.transition =
        "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

      prevButton.style.opacity = "1";
      prevButton.style.transform = "translateY(-20px)";
    } else {
      prevButton.style.opacity = "0";
      prevButton.style.transform = "translateY(20px)";
    }
  }
});

//
