document.addEventListener("mousemove", function (event) {
    var viewportHeight = window.innerHeight;
    var y = event.clientY;

    var nextButton = document.querySelector(".next-exercise");
    var prevButton = document.querySelector(".previous-exercise");

    var buttonHeight = 500; // גובה הכפתורים בפיקסלים

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
        titleElement.textContent = titleText.slice(0, currentPosition + 10);
        currentPosition++;
    } else {
        currentPosition = 0; // Reset position for infinite loop
    }

    // Adjust delay based on desired typing speed
    setTimeout(typeEffect, 100);
}

// Start the infinite typing effect
typeEffect();
