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
