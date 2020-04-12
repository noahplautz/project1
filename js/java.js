const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', event => {
  menuButton.classList.toggle('active');
  event.stopPropagation();
  navigation.classList.toggle('open');
});
document.addEventListener('click', () => {
  menuButton.classList.remove('active');
  navigation.classList.remove('open');
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex+=n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length) {
    slideIndex = 1;
  }
  if(n < 1) {
    slideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");

  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}