// navbar color change
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 5);
    $('#arrow-nav').toggleClass('arrow-visible', $(this).scrollTop() > 500);
  });

// nav item color 
$(window).scroll(function () {
    $('#home-nav').toggleClass('active', $(this).scrollTop() < 700);
    $('#service-nav').toggleClass('active', $(this).scrollTop() > 700 && $(this).scrollTop() < 2000);
    $('#resume-nav').toggleClass('active', $(this).scrollTop() > 2000 && $(this).scrollTop() < 3500);
    $('#projects-nav').toggleClass('active', $(this).scrollTop() > 3500 && $(this).scrollTop() < 4600);
    $('#contact-nav').toggleClass('active', $(this).scrollTop() > 4600);
  });