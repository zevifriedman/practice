const navbar = document.querySelector(".navbar");
let previousScrollY = 0;

// Function to check if the current page is index.html, exercises.html, or mahat.html
function isIndexPage() {
  return window.location.pathname.includes("index.html");
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

const titleElement = document.querySelector("h1");
const titleText = titleElement.textContent;
let currentPosition = 0;

function typeEffect() {
  if (currentPosition < titleText.length) {
    titleElement.textContent = titleText.slice(0, currentPosition + 1);
    currentPosition++;
  } else {
    currentPosition = 0; // Reset position for infinite loop
  }

  // Adjust delay based on desired typing speed
  setTimeout(typeEffect, 200);
}

// Start the infinite typing effect
typeEffect();

function checkAnswer(questionId, selectedAnswer) {
  var correctAnswer = document.getElementById(questionId).dataset.correctAnswer;
  var answerText = document.getElementById("answer" + questionId.substring(8));
  if (!answerText) {
    // Create answer element if it doesn't exist
    answerText = document.createElement("p");
    answerText.id = "answer" + questionId.substring(8);
    document.getElementById(questionId).appendChild(answerText);
  }
  if (selectedAnswer === correctAnswer) {
    answerText.style.color = "green";
    answerText.innerHTML = "תשובה נכונה!";
  } else {
    answerText.style.color = "red";
    answerText.innerHTML = "תשובה שגויה!";
  }
  answerText.style.display = "block";
}
