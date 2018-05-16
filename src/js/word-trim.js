var ourWord = document.getElementsByClassName("bottom-list__link")[0];
var usWord = document.getElementsByClassName("bottom-list__link")[5];
var windowSize = window.matchMedia("(max-width: 400px)");

function myFunction(windowSize) {
  if (windowSize.matches) {
    ourWord.textContent = "Menu";
    usWord.textContent = "Visit";
  } else {
    ourWord.textContent = "Our Menu";
    usWord.textContent = "Visit us";
  }
}

myFunction(windowSize) // Call listener function at run time
windowSize.addListener(myFunction) // Attach listener function on state changes