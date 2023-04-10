(function($){
  $(document).ready(function() {
    let slides = $('.slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 3000);

    function nextSlide() {
      $(slides[currentSlide]).removeClass('active');
      currentSlide = (currentSlide + 1) % slides.length;
      $(slides[currentSlide]).addClass('active');
    }
  });
})(jQuery)
