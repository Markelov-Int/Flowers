$(document).ready(function (){
  const flowersSlider = new Swiper('.flowers-slider', {
    //параметры слайдера
    loop: true,
    slidesPerView: 6,
  
    // Подключаем (стрелки)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // настройки адаптивной версии
    breakpoints: {
      // если браузе >= 320px
      320: {
        slidesPerView: 2
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3
      },
      // если браузер >= 992px
      992: {
        slidesPerView: 6
      }
    }
  });

const reviewsSlider = new Swiper('.reviews-slider', {
    //параметры слайдера
    loop: true,
    slidesPerView: 1,
  
    // Подключаем (стрелки)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/0IsBu45B3T8/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/0IsBu45B3T8/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/9T1InwNmNmo/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/9T1InwNmNmo/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/WS4JcpoZz6E/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/WS4JcpoZz6E/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

  $("#review-2").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/0IsBu45B3T8/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/0IsBu45B3T8/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/9T1InwNmNmo/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/9T1InwNmNmo/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/WS4JcpoZz6E/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/WS4JcpoZz6E/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

const counter = function () {
  const btns = document.querySelectorAll('.counter-button');
  
  
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter-input');
        const currentValue = +inp.value;
        let newValue;
  
        if (direction === 'plus') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
  
        inp.value = newValue;
      })
    })
  
  }
  
  counter();
  
});