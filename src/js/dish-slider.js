const dishesSliderListElem = document.querySelector(".dishes-slider-list");
const dishesLeftWrapElem = document.querySelector(".dishes-left-wrap");
const dishesSliderBigImgElem = document.querySelector(".dishes-left-wrap__img");
const leftArrowElem = document.querySelector(".dishes-slider__btn-left");
const rightArrowElem = document.querySelector(".dishes-slider__btn-right");
let windowWidth = window.matchMedia("(max-width: 1199px)");
let valueCounter = '3';

dishesSliderListElem.addEventListener('click', listItemClicked, false);
leftArrowElem.addEventListener('click', arrowClicked, false);
rightArrowElem.addEventListener('click', arrowClicked, false);

function arrowClicked(event) {
  if (event.currentTarget === leftArrowElem) {
    switch (valueCounter) {
      case "1":
        valueCounter = "3";
        animateSlider(valueCounter);
        break;
      case "2":
        animateSlider((valueCounter - 1).toString());
        break;
      case "3":
        animateSlider((valueCounter - 1).toString());
        break;
    }
  } else if (event.currentTarget === rightArrowElem) {
    switch (valueCounter) {
      case "1":
        animateSlider((parseInt(valueCounter) + 1).toString());
        break;
      case "2":
        animateSlider((parseInt(valueCounter) + 1).toString());
        break;
      case "3":
        valueCounter = "1";
        animateSlider(valueCounter);
        break;
    }
  }
};

function listItemClicked(event) {
  let targetValue = event.target.getAttribute("val");
  switch (targetValue) {
    case "1":
      animateSlider(targetValue);
      break;
    case "2":
      animateSlider(targetValue);
      break;
    case "3":
      animateSlider(targetValue);
      break;
  };
};

function animateSlider(target) {
  //add value
  valueCounter = target;
  //clear previous state
  dishesLeftWrapElem.classList.remove('animation');
  dishesLeftWrapElem.classList.remove('animation-top');
  dishesLeftWrapElem.classList.remove('animation-reverse');
  dishesLeftWrapElem.classList.remove('animation-reverse-top');
  //check innerWidth size
  if (windowWidth.matches) {
    //start event
    dishesLeftWrapElem.classList.add('animation-top');
    //check if transition ended
    dishesLeftWrapElem.addEventListener("transitionend", function() {
      //change img
      dishesSliderBigImgElem.src = 'img/big_img' + target + '.png';
      //start event reverse
      dishesLeftWrapElem.classList.add('animation-reverse-top');
    });
  } else {
    //start event
    dishesLeftWrapElem.classList.add('animation');
    //check if transition ended
    dishesLeftWrapElem.addEventListener("transitionend", function() {
      //change img
      dishesSliderBigImgElem.src = 'img/big_img' + target + '.png';
      //start event reverse
      dishesLeftWrapElem.classList.add('animation-reverse');
    });
  };
}