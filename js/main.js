//Навигация в header
window.onload = function () {
   const headerBurger = document.querySelector('.header__burger');
   const headerMenu = document.querySelector('.header__menu');

   headerBurger.onclick = () => {
      headerMenu.classList.toggle('menu-active');
      headerBurger.classList.toggle('burger-active');
   }
}

//Cлайдер "Our room"
const prev = document.getElementById('room__prev');
const next = document.getElementById('room__next');
const slides = document.getElementsByClassName('room__slide');
const dots = document.getElementsByClassName('room__dot');

let index = 0;

const activeSlide = n => {
   for (slide of slides) {
      slide.classList.remove('room-active');
   }
   slides[n].classList.add('room-active');
}

const activeDot = n => {
   for (dot of dots) {
      dot.classList.remove('dot-active');
   }
   dots[n].classList.add('dot-active');
}

const nextSlide = () => {
   if (index == slides.length - 1) {
      index = 0;
      activeSlide(index);
      activeDot(index);
   } else {
      index++;
      activeSlide(index);
      activeDot(index);
   }
}

const prevSlide = () => {
   if (index == 0) {
      index = slides.length - 1;
      activeSlide(index);
      activeDot(index);
   } else {
      index--;
      activeSlide(index);
      activeDot(index);
   }
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);