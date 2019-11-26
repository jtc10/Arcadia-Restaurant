// Script for Slideshow

const image = [
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
