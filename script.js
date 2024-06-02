const navbar = document.querySelector(".navbar");
let previousScrollY = 0;

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

document.addEventListener("mousemove", function (event) {
  var viewportHeight = window.innerHeight;
  var y = event.clientY;

  var nextButton = document.querySelector(".next-exercise");
  var prevButton = document.querySelector(".previous-exercise");

  var buttonHeight = 100; // גובה הכפתורים בפיקסלים

  if (viewportHeight - y <= buttonHeight) {
    nextButton.style.transition =
      "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    prevButton.style.transition =
      "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

    nextButton.style.opacity = "1";
    prevButton.style.opacity = "1";

    nextButton.style.transform = "translateY(-20px)";
    prevButton.style.transform = "translateY(-20px)";
  } else {
    nextButton.style.opacity = "0";
    prevButton.style.opacity = "0";

    nextButton.style.transform = "translateY(20px)";
    prevButton.style.transform = "translateY(20px)";
  }
});

function toggleCode(button) {
  var code = button.previousElementSibling;
  code.classList.toggle("active");
  if (code.classList.contains("active")) {
    button.textContent = "סגור";
    button.style.transform = "rotate(180deg)";
    button.style.backgroundColor = "#dc3545";
    animateCode(code);
  } else {
    button.textContent = "הצג הכול";
    button.style.transform = "rotate(0deg)";
    button.style.backgroundColor = "#007bff";
  }
}

function animateCode(code) {
  var lines = code.querySelectorAll("p, code");
  lines.forEach(function (line, index) {
    setTimeout(function () {
      line.style.opacity = "1";
      line.style.transform = "translateX(0)";
    }, index * 100);
  });
}
