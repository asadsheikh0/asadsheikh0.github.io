

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

function highlight(object) {
  var obj = document.getElementById(object.id);
  obj.style.boxShadow = "5px 10px #888888";
}

function removeHighlight(object) {
  var obj = document.getElementById(object.id);
  obj.style.boxShadow = "0px 0px";
}