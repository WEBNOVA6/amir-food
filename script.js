// Navbar shadow on scroll

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "#0b3d27";
}
else{
header.style.background = "#0f5132";
}

});

// Smooth animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="1s";

observer.observe(section);

});

// Gallery Lightbox

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {

img.addEventListener("click", () => {

const overlay = document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="9999";

const image = document.createElement("img");

image.src = img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";

overlay.appendChild(image);

overlay.addEventListener("click", () => {

overlay.remove();

});

document.body.appendChild(overlay);

});

});