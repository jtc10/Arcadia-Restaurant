
// Script for responsive nav bar menu

const toggleClass = document.querySelector('.menu-toggle');
const classSwitch = document.querySelector('.navigation');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelectorAll('.right-arrow');
const container1 = document.querySelector('.specials_content_container-1');
const container2 = document.querySelector('.specials_content_container-2');
// test window size
const mq1 = window.matchMedia('screen and (min-width: 1023px)');



/* Function allowing the click of the .menu-toggle class
   to affect the height of the .navigation class */

function toggleStyle(el, prop, style1, style2) {
  el.style[prop] = el.style[prop] === style1 ? style2 : style1
}

 // Event listener for opening responsive navigation menu
toggleClass.addEventListener('click', e => {
  toggleStyle(classSwitch, 'height', '115px', '0');
});

/* Functions used on the carousel for
   specials on home page */


   leftArrow.addEventListener('click', function() {
      container1.style.transform = 'translateX(-100%)';
      container2.style.transform = 'translateX(-100%)';
   })

   rightArrow[1].addEventListener('click', function() {
      container1.style.transform = 'translateX(0)';
      container2.style.transform = 'translateX(0)';
   })

// Changes height of .navigation to < 0 when screen size increases
function widthChange() {
  if (mq1.matches) {
    classSwitch.style.height = 'auto';
    console.log("hello");
  } else if (!mq1.matches) {
    classSwitch.style.height = '0';
  }
}

// Changes height of .navigation to < 0 when screen size increases
window.addEventListener('resize', widthChange);


// Script for Slideshow
const image = [
  // '../images/karakoy-1.jpg',
  // '../images/karakoy-2.jpg',
  // '../images/karakoy-3.jpg',
  // '../images/karakoy-4.jpg',
  // '../images/karakoy-5.jpg',
  'images/karakoy-1.jpg',
  'images/karakoy-2.jpg',
  'images/karakoy-3.jpg',
  'images/karakoy-4.jpg',
  'images/karakoy-5.jpg',

];
let i = 0;
const imageContainer = document.getElementsByClassName('slideshow-image');
const time = 3000;

function changeSlide() {
  imageContainer[0].src = image[i];
  if (i < image.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeSlide()', time);
}

changeSlide();


// Slide in on scroll for .cards


// Debounce function to time how many times function is run

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
};

const sliderCards = document.querySelectorAll('.transition');

console.log(sliderCards[0].height);

function slideIn() {
  // sliderCards.forEach(sliderCard => {
  //       // half way through the image
  //       const slideInAt = (window.scrollY + window.innerHeight) - sliderCard.height / 2;
  //       // bottom of the image
  //       const imageBottom = sliderCard.offsetTop + sliderCard.height;
  //       const isHalfShown = slideInAt > sliderCard.offsetTop;
  //       const isNotScrolledPast = window.scrollY < imageBottom;
  //       if (isHalfShown && isNotScrolledPast) {
  //         sliderCard.classList.add('.active');
  //       }
  //     });
}

window.addEventListener('scroll', debounce(slideIn));
