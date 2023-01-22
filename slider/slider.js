var slides = document.getElementsByClassName("slide");
var currentSlide = 0;
      
function nextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
}
      
var slides = document.getElementsByClassName("slide");
var captions = ["TEXT","CHANGE","THIS"];
var currentSlide = 0;
    
function nextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
    document.getElementById("caption").innerHTML = captions[currentSlide];
}

setInterval(nextSlide, 3000);