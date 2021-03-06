$(document).ready(function () {
	
  $('.subjects .see-all a').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('.subjects__item.hide').slideDown().removeClass('hide');
    $('.subjects__item').css('display', 'flex');
  });

  $('#request__form select').select2({
    minimumResultsForSearch: -1
  });

  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top - fixed_offset
    }, 500);
    e.preventDefault();
    if(window.innerWidth <= 1050) {
      $('header .header__menu nav').slideUp();
      $('.menu-btn button').removeClass('is-active');
    }
  });

  var forEach = function forEach(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) {
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    } else for (var e = 0, l = t.length; l > e; e++) {
      o.call(r, t[e], e, t);
    }
  };

  var hamburgers = document.querySelectorAll(".hamburger");

  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
      }, false);
    });
  }

  $('.menu-btn').click(function () {
    $('header .header__menu nav').slideToggle();
  });

  $('.examples__items').lightSlider({
    pause: 7000,
    auto: true,
    item: 4,
    pager: false,
    slideMargin: 20,
    loop:true,
    slideMove:1,
    responsive : [
      {
        breakpoint:1620,
        settings: {
          item:3
        }
      },
      {
        breakpoint:1250,
        settings: {
          item:2
        }
      },
      {
        breakpoint:850,
        settings: {
          item:1
        }
      }
    ]
  });

});
