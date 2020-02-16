// Animation Hamburger
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const bgElements = document.querySelector(".wrapper ")
hamburger.addEventListener('click',()=>{
    console.log("click")
    navLinks.classList.toggle("open");
    bgElements.classList.toggle("blur-fore");
    });