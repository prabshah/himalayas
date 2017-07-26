
//////////////// Scroll Top functionality /////////////////


window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("go-top-button").style.display = "block";
  } else {
    document.getElementById("go-top-button").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

// responsive navigation using jqyery /////////////////

$('button.toggle-icon').on('click', function() {
	$('nav > ul').toggleClass('responsive-ul');
	$('nav').toggleClass('responsive-nav-height');

});

if($(window).width() > 950){
  $('nav').css('height', '50px');
}

