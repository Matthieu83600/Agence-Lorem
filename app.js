// Ekko Lightbox
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Carousel
$(".carousel").carousel({
  interval: 2500,
  pause: true,
});

// Navbar Animation
$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $(".navbar").addClass("opaque");
  } else {
    $(".navbar").removeClass("opaque");
  }
});
