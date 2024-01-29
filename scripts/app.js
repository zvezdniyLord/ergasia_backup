const headerForm = document.querySelector(".header__form");
const closeForm = document.querySelector(".header__form-close");
const btnHeaderBanner = document.querySelector('.btn__header-banner');

const closeModal = elementClose => elementClose.classList.remove("open");
const openModal = elementOpen => elementOpen.classList.add("open")

btnHeaderBanner.addEventListener("click", () => openModal(headerForm));
closeForm.addEventListener("click", () => closeModal(headerForm));

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}