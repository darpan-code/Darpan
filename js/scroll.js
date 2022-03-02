// navbar color change
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 5);
  });

// nav item color 
$(window).scroll(function () {
    $('#home-nav').toggleClass('active', $(this).scrollTop() < 700);
    $('#service-nav').toggleClass('active', $(this).scrollTop() > 700 && $(this).scrollTop() < 2000);
    $('#resume-nav').toggleClass('active', $(this).scrollTop() > 2000 && $(this).scrollTop() < 4000);
    $('#projects-nav').toggleClass('active', $(this).scrollTop() > 4000);
  });