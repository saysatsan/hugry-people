// формат введення дати
const input = document.getElementById('date');
input.setAttribute('pattern', '\\d{2}/\\d{2}');

// часові обмеження для поля input time
const timeInput = document.getElementById('myTime');

timeInput.min = "08:00";
timeInput.max = "20:00";
timeInput.step = "900";

timeInput.addEventListener('change', function() {
  const selectedTime = timeInput.value;
  if (selectedTime < "08:00" || selectedTime > "20:00") {
    timeInput.value = "08:00";
  }
});

// слайдер секція 4
$('.carousel').slick({
      dots: true,
      autoplay: true,
      infinity: true,
      autoplaySpeed: 3000,
      centerMode: true,
      arrows: false,
      fade: true,
      spid: 300,
      zIndex: 1010, 
});

// слайдер секція 7
$('.carusel_s7').slick({      
      autoplay: true,
      infinity: true,
      autoplaySpeed: 2000,
      centerMode: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
            { breakpoint: 797,
              settings: {
                slidesToShow: 3                
              }
            },
            { breakpoint: 480,
              settings: {
                slidesToShow: 2                
              }
            }  
      ]
});


// робота бургера
const navBurger = document.querySelector('.nav_burger_btn');
const navBurgerMenu = document.querySelector('.nav_menu');
const navBurgerIconBefore = document.querySelector('.nav_burger_icon_before');
const navBurgerIconAfter = document.querySelector('.nav_burger_icon_after');
const navBurgerIcon = document.getElementById('burger_center');
// відкривання/закривання меню при кліку на бургер, бургер/хрестик
navBurger.addEventListener('click', () => {  
  navBurgerMenu.classList.toggle('open_menu');
  navBurgerIconBefore.classList.toggle('open');
  navBurgerIconAfter.classList.toggle('open');
  navBurgerIcon.classList.toggle('none');

});

// закривання меню при кліку на поле меню
navBurgerMenu.addEventListener('click', () =>{
  navBurgerMenu.classList.remove ('open_menu');
  navBurgerIconBefore.classList.remove('open');
  navBurgerIconAfter.classList.remove('open');
  navBurgerIcon.classList.remove('none');

});


// відкривання іконок мереж
const iconButton = document.querySelector('.baner_i');
const boxIcon = document.querySelector('.iconsoc');
const icons = document.querySelectorAll('.icon');

function showIcons() {
      for (let i = 0; i < icons.length; i++) {
        setTimeout(() => {
          icons[i].classList.toggle('icon-show');
        }, i * 100);
      }
}

iconButton.addEventListener('click', () => {  
      boxIcon.classList.toggle('icon_open');
      showIcons();
});



// кнопка "на початок"
const buttonUp = document.querySelector('.circle_home');
const header = document.querySelector('.header');
// з'являння при скролі нижче хедера
window.addEventListener('scroll',() =>{
  if(window.scrollY >= header.offsetTop + header.offsetHeight){
    buttonUp.classList.add('button_show');
  } else {
    buttonUp.classList.remove('button_show');
  }
});
// прокрутка на клік вгору
buttonUp.addEventListener('click', () => {
  scrollToTop();
});

function scrollToTop() {
  const scrollDuration = 300; // Визначаємо тривалість прокрутки
  const scrollHeight = window.scrollY;
  const scrollStep = Math.PI / (scrollDuration / 15);
  const cosParameter = scrollHeight / 2;

  let scrollCount = 0;
  let scrollMargin;

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      scrollCount += 1;
      scrollMargin =
        cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
      window.scrollTo(0, scrollHeight - scrollMargin);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}



