

function navClick() {
    var hamburger = document.getElementById("hamburger-icon");
    hamburger.classList.toggle("active");
    return false;
    
}

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });
