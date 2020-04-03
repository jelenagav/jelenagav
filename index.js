// animate on scroll

AOS.init({
  disable: 'mobile',
  duration: 800,
  mirror: false,
  easing: 'ease-in-out'
  // once: true,
  // easing: 'ease-out-back'
});



// navbar
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// change src
function hover(element) {
  element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}

function unhover(element) {
  element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
}

// This should probably be throttled.
// or event inst of paran

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('current');
    } else {
      link.classList.remove('current');
    }
  });
});

// smooth scrolling
mainNavLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// change color 
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 300) {
            $("header").addClass("changeColor");
            $("header").addClass("changeRes");
        }
        else {
            $("header").removeClass("changeColor");
            $("header").addClass("originalColor");
            $("header").removeClass("changeRes");
        }
    });
});
