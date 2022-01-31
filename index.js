var imgIndex = 1
showSlides(1)

function currentSlide(n) {
    showSlides(imgIndex = n);
  }
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("img-slides")
    var dots = document.getElementsByClassName("dot")
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    
    if(imgIndex>slides.length){
        imgIndex = 1;
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    } 
    slides[imgIndex-1].style.display = "block";
    dots[imgIndex-1].className += " active";
    
    

}
var scl = document.getElementsByClassName("social")
function hover(x){
    x.style.opacity = 0.3
    
    
}
function normal(x){
    x.style.opacity = 1
    
}
var slideIndex = 1;
disSlides(slideIndex);

function plusSlides(n) {
  disSlides(slideIndex += n);
}

function colCurrent(n) {
  disSlides(slideIndex = n);
}
function disSlides(n){
    var i;
  var slides = document.getElementsByClassName("img-slide");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-col", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-col";
}