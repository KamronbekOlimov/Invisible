// preloader
window.addEventListener('load', function () {
  document.getElementById("preloader").classList.add("hide");
})

// menu
let refOffset = -100;
const bannerHeight = 20;
const bannerWrapper = document.querySelector('.creative-menu');

const handler = () => {
  const newOffset = window.scrollY || window.pageYOffset;

  if (newOffset > bannerHeight) {
    if (newOffset > refOffset) {
      bannerWrapper.classList.add('fixed-up');
    } else {
      bannerWrapper.classList.remove('fixed-up');
    }
    refOffset = newOffset;
  }
};

window.addEventListener('scroll', handler, false);

// background
// var bg_image = document.querySelectorAll('.background'), i;

// for (i = 0; i < bg_image.length; ++i) {
//   bg_image[i].style.backgroundImage = "url(" + bg_image[i].getAttribute('data-bg') + ")";
// };

// wow
new WOW().init();

// toggle button
(function () {

  var toggle = document.querySelector('.nav-switch');
  var creative_menu = document.querySelector('.creative-menu');
  var section = document.querySelector('section');

  toggle.addEventListener('click', function () {

    creative_menu.classList.toggle('action');

  });
  section.addEventListener('click', function () {

    creative_menu.classList.remove('action');

  });

})();

// appear
let observedElements = document.querySelectorAll('.inview-element');
// Define the elements you want to intiate an action on

const options = { //define your options
  threshold: 0.5 //50% of the element in view
}

const inViewCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // define the event/property you want to use
      entry.target.classList.add('inview');
      //do something with the element
    }
  });
}

let observer = new IntersectionObserver(inViewCallback, options);
// create a new instance using our callback which contains our elements and actions, using the options we defined

observedElements.forEach(element => {
  observer.observe(element) // run the observer 
});

// single-page-nav

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 220;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector(".list-item a[href*=" + sectionId + "]").classList.add("current");
    } else {
      document.querySelector(".list-item a[href*=" + sectionId + "]").classList.remove("current");
    }
  });
}

// Glightbox
var lightbox = GLightbox();
lightbox.on('open', (target) => {
  console.log('lightbox opened');
});
var lightboxDescription = GLightbox({
  selector: '.glightbox2'
});
var lightboxVideo = GLightbox({
  selector: '.glightbox3'
});
lightboxVideo.on('slide_changed', ({ prev, current }) => {
  console.log('Prev slide', prev);
  console.log('Current slide', current);

  const { slideIndex, slideNode, slideConfig, player } = current;

  if (player) {
    if (!player.ready) {
      // If player is not ready
      player.on('ready', (event) => {
        // Do something when video is ready
      });
    }

    player.on('play', (event) => {
      console.log('Started play');
    });

    player.on('volumechange', (event) => {
      console.log('Volume change');
    });

    player.on('ended', (event) => {
      console.log('Video ended');
    });
  }
});

var lightboxInlineIframe = GLightbox({
  selector: '.glightbox4'
});