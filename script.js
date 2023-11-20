function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();

          const moNav = document.querySelector("#mo-nav");
          const openNav = document.querySelector("#open-nav");
          const closeNav = document.querySelector("#close-nav");

          openNav.addEventListener("click", function () {
            moNav.style.right = "0";
            moNav.style.transition = "0.3s";
            moNav.style.overflowY = "scroll"
            document.body.style.overflow = "hidden";
          });

          closeNav.addEventListener("click", function () {
            moNav.style.right = "-100%";
            moNav.style.transition = "0.3s";
            document.body.style.overflowY = "scroll";
          });
          
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

// ------------main
$('.main-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),
});


$('button').click(function () {
  var $this = $(this);
  var index = $this.index();

  $this.addClass('active');
  $this.siblings('button.active').removeClass('active');

  var $outer = $this.closest('.outer');
  var $current = $outer.find(' > .tabs > .tab.active');
  var $post = $outer.find(' > .tabs > .tab').eq(index);

  $current.removeClass('active');
  $post.addClass('active');
  // 위의 코드는 탭메뉴 코드입니다.

  $('.slider2').slick('setPosition');
  $('.slider3').slick('setPosition');
  $('.slider4').slick('setPosition');
  // 탭 페이지 안에서 slick 사용시 – slick이 첫페이지에 있지 않으면 slick의 첫번째 이미지가 보이지 않고 2번째 부터 도는것을 확인 할 수 있다. 해당 문제는 탭이 active가 된 후 그 페이지에 slick이 있다면 = slick의 위치를 수동으로 새로 고쳐줘야 한다.
});

// 기존 처음의 slick 적용

$('.slider2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  prevArrow: $('.slick-prev2'),
  nextArrow: $('.slick-next2'),
  responsive: [ // 반응형 웹 구현 옵션
      {
          breakpoint: 700, //화면 사이즈 960px
          settings: {
              slidesToShow: 2,

          }
      },
      {
          breakpoint: 2560, //화면 사이즈 960px
          settings: {
              slidesToShow: 3,

          }
      },
  ]
});


$('.slider3').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  prevArrow: $('.slick-prev3-1'),
  nextArrow: $('.slick-next3-1'),
  responsive: [ // 반응형 웹 구현 옵션
      {
          breakpoint: 700, //화면 사이즈 960px
          settings: {
              slidesToShow: 2,

          }
      },
      {
          breakpoint: 2560, //화면 사이즈 960px
          settings: {
              slidesToShow: 3,

          }
      },
  ]
});


$('.slider4').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  prevArrow: $('.slick-prev4'),
  nextArrow: $('.slick-next4'),
  responsive: [ // 반응형 웹 구현 옵션
      {
          breakpoint: 700, //화면 사이즈 960px
          settings: {
              slidesToShow: 2,

          }
      },
      {
          breakpoint: 2560, //화면 사이즈 960px
          settings: {
              slidesToShow: 3,

          }
      },
  ]
});

$('.review').slick({
  // centerMode: true,
  centerPadding: '500px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: $('.slick-prev6'),
  nextArrow: $('.slick-next6'),
  responsive: [ // 반응형 웹 구현 옵션
      {
          breakpoint: 900, //화면 사이즈 960px
          settings: {
              slidesToShow: 2,

          }
      },
      {
          breakpoint: 1360, //화면 사이즈 960px
          settings: {
              slidesToShow: 3,
              centerPadding: '300px',
          }
      },
      {
          breakpoint: 2560,
          settings: {
              slidesToShow: 3,
              centerPadding: '500px',
          }
      }
  ]
});

// -------------product

$('.product-m-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: $('.slick-prev1'),
  nextArrow: $('.slick-next1'),
});


$('.review').slick({
  centerMode: true,
  slidesToShow: 1,
  dots: true,
  infinite: false,
  autoplaySpeed: 1500,
  prevArrow: $('.slick-prev2'),
  nextArrow: $('.slick-next2'),
  responsive: [ // 반응형 웹 구현 옵션
      {
          breakpoint: 2560,
          settings: {
              slidesToShow: 1,
              centerPadding: '50px',
          }
      },
  ]
});

// ----------------------faq

$('button').click(function () {
  var $this = $(this);
  var index = $this.index();

  $this.addClass('active');
  $this.siblings('button.active').removeClass('active');

  var $outer = $this.closest('.faq-tab');
  var $current = $outer.find(' > .tabs > .tab.active');
  var $post = $outer.find(' > .tabs > .tab').eq(index);

  $current.removeClass('active');
  $post.addClass('active');
  // 위의 코드는 탭메뉴 코드입니다.
});


var acodian = {
  click: function (target) {
      var $target = $(target);
      $target.on('click', function () {

          if ($(this).hasClass('on')) {
              slideUp($target);
          } else {
              slideUp($target);
              $(this).addClass('on').next().slideDown();
          }

          function slideUp($target) {
              $target.removeClass('on').next().slideUp();
          }

      });
  }
};
acodian.click('.faq_box > .faq_ques');

// -----------------faq

$('button').click(function () {
  var $this = $(this);
  var index = $this.index();

  $this.addClass('active');
  $this.siblings('button.active').removeClass('active');

  var $outer = $this.closest('.faq-tab');
  var $current = $outer.find(' > .tabs > .tab.active');
  var $post = $outer.find(' > .tabs > .tab').eq(index);

  $current.removeClass('active');
  $post.addClass('active');
  // 위의 코드는 탭메뉴 코드입니다.
});


var acodian = {
  click: function (target) {
      var $target = $(target);
      $target.on('click', function () {

          if ($(this).hasClass('on')) {
              slideUp($target);
          } else {
              slideUp($target);
              $(this).addClass('on').next().slideDown();
          }

          function slideUp($target) {
              $target.removeClass('on').next().slideUp();
          }

      });
  }
};
acodian.click('.faq_box > .faq_ques');














