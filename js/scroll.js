// navbar color change
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 5);
  });

// nav item color 
$(window).scroll(function () {
    $('#home-nav').toggleClass('active', $(this).scrollTop() < 700);
    $('#service-nav').toggleClass('active', $(this).scrollTop() > 700);
  });