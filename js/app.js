const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

window.addEventListener("scroll", function() {
  let navScroll = document.getElementById('nav');
  navScroll.classList.toggle("fixed", window.scrollY > 10);
});

console.log('Scrolling' +" "+ scrollY);


var checkbox = document.querySelector('input[name=theme]');
var projectsSection = document.getElementById('projects');
var ServicesCard1 = document.getElementById('card1');
var ServicesCard2 = document.getElementById('card2');
var ServicesCard3 = document.getElementById('card3');

var BlogCard1 = document.getElementById('blog1');
var BlogCard2 = document.getElementById('blog2');
var BlogCard3 = document.getElementById('blog3');


checkbox.addEventListener('change', function() {
  if(this.checked){
    transform()
    document.documentElement.setAttribute("data-theme", "dark");
    projectsSection.style.backgroundColor = "rgb(46, 46, 47)";
    ServicesCard1.style.backgroundColor = "#414042";
    ServicesCard2.style.backgroundColor = "#414042";
    ServicesCard3.style.backgroundColor = "#414042";

    BlogCard1.style.backgroundColor = "#414042";
    BlogCard2.style.backgroundColor = "#414042";
    BlogCard3.style.backgroundColor = "#414042";
  } else {
    transform()
    document.documentElement.setAttribute("data-theme", "light");
    projectsSection.style.backgroundColor = "#ececec";
    ServicesCard1.style.backgroundColor = "#ececec";
    ServicesCard2.style.backgroundColor = "#ececec";
    ServicesCard3.style.backgroundColor = "#ececec";

    BlogCard1.style.backgroundColor = "#ececec";
    BlogCard2.style.backgroundColor = "#ececec";
    BlogCard3.style.backgroundColor = "#ececec";
  }
});

let transform = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000)
};

function navBack() {
  var nav = document.getElementById('nav').classList.toggle("change");
};