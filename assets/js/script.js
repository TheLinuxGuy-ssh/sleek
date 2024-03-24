AOS.init();
const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/1ee8f271b9.js";
document.addEventListener('contextmenu', event => event.preventDefault());
document.body.appendChild(script);

var mouseCursor = document.querySelector(".cursor");
var navlinks = document.querySelectorAll('.header a');
var link = document.querySelectorAll(".allow-hover");
var body = document.querySelectorAll('body');
var work = document.querySelectorAll('.work-link');
var marquee = document.querySelectorAll(".marquee");

window.addEventListener('mousemove' ,cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}
// body.addEventListener('click', function () {
//     mouseCursor.classList.add('cursor-clicked');
// });
// document.addEventListener('click', function (event) {
//     if (event.target !== box)
//     box.classList.remove('inner');
//  });
navlinks.forEach(link => {
    link.addEventListener('mouseover', nav => {
        mouseCursor.classList.add('link-grow')
    })
    link.addEventListener('mouseout', nav => {
        mouseCursor.classList.remove('link-grow')
    })
});
link.forEach(link => {
    link.addEventListener('mouseover', nav => {
        mouseCursor.classList.add('link-grow')
    })
    link.addEventListener('mouseout', nav => {
        mouseCursor.classList.remove('link-grow')
    })
});
work.forEach(link => {
    link.addEventListener('mouseover', nav => {
        mouseCursor.classList.add('link-grow');
        mouseCursor.classList.add('hover-work')

    })
    link.addEventListener('mouseout', nav => {
        mouseCursor.classList.remove('link-grow')
        mouseCursor.classList.remove('hover-work')
    })
});
marquee.forEach(link => {
    link.addEventListener('mouseover', nav => {
        mouseCursor.classList.add('link-grow');

    })
    link.addEventListener('mouseout', nav => {
        mouseCursor.classList.remove('link-grow')
    })
});

let scrollpos = window.scrollY

const header = document.querySelector(".header")
const pod = document.querySelector(".pod")
const scrollChange = 1
const globe = 350
const add_class_on_scroll = () => header.classList.add("scrolled")
const remove_class_on_scroll = () => header.classList.remove("scrolled")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  if(scrollpos >= globe) {
    pod.classList.add("moved")
  } else {
    pod.classList.remove("moved")
  }
  
})




