
// Script for responsive nav bar menu

const toggleClass = document.querySelector('.menu-toggle');
const classSwitch = document.querySelector('.navigation');
const leftArrow = document.querySelector('.left-arrow');
const header = document.getElementsByTagName('header');
const logo = document.querySelector('.landing_logo_container');
const rightArrow = document.querySelectorAll('.right-arrow');
const container1 = document.querySelector('.specials_content_container-1');
const container2 = document.querySelector('.specials_content_container-2');
const sliderCards = document.querySelectorAll('.card--transition');
const footerSlide = document.querySelectorAll('.footer--transition');
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




// Changes height of .navigation to < 0 when screen size increases
function widthChange() {
  if (mq1.matches) {
    classSwitch.style.height = 'auto';
  } else if (!mq1.matches) {
    classSwitch.style.height = '0';
  }
}

// Changes height of .navigation to < 0 when screen size increases
window.addEventListener('resize', widthChange);

// Header and landing page logo styling for scrolling

function checkHeaderScroll() {
  if (window.pageYOffset > 10) {
    header[0].style.opacity = '1';
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-250%)';
  } else if (window.pageYOffset < 10) {
    header[0].style.opacity = '0';
    logo.style.opacity = '1';
    logo.style.transform = 'translateY(0)';
  }
}

window.addEventListener('scroll', checkHeaderScroll);


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


function slideIn() {
  sliderCards.forEach(sliderCard => {
        const slideInAt = (window.scrollY + window.innerHeight) -  sliderCard.clientHeight / 3;
        const isHalfShown = slideInAt > sliderCard.offsetTop;
        if (isHalfShown) {
          sliderCard.style.transform = 'translateY(0)';
        }
      });
}

function footerSlideIn() {
  footerSlide.forEach(footerSlider => {
    const slideInAt = (window.scrollY + window.innerHeight) - footerSlider.clientHeight /4;
    const isHalfShown = slideInAt > footerSlider.offsetTop;
    if (isHalfShown) {
      footerSlider.style.transform = 'translateY(-20%)';
    }
  })
}

window.addEventListener('scroll', debounce(slideIn));
window.addEventListener('scroll', debounce(footerSlideIn));
