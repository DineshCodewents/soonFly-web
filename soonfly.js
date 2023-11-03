window.onscroll = function() {myFunction();};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const menu = document.querySelector('.hamburger-menu')
const menuList = document.querySelector('.navbar-nav')
menu.addEventListener('click', ()=>{
  menuList.classList.toggle('show')
})

