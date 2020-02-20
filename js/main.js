// Animation Hamburger
const hamburger = document.querySelector(".hamburger");
const hamLines = document.querySelectorAll(".line");
const navList = document.querySelector(".nav-list");
hamburger.addEventListener("click",()=>{
    hamLines.forEach((hamLine)=>{
        hamLine.classList.toggle("change")
        navList.classList.toggle("change")
    });
});