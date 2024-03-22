AOS.init();
const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/1ee8f271b9.js";

document.body.appendChild(script);

var mouseCursor = document.querySelector(".cursor");
var navlinks = document.querySelectorAll('.header a');
var link = document.querySelectorAll(".allow-hover");
var body = document.querySelectorAll('body');

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