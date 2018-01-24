$(document).ready(function () {

  var element = $('.questions-item.active');
  $('.questions-content').scroll(function (e) {
    element = $('.questions-item.active');
    var y = $(this).scrollTop();
    var r = element.offset().top - $(this).offset().top;
    $('.questions-list li').removeClass('active');
    $('.' + element.data('item')).addClass('active');
    console.log(r);
    if (r < 0) {
      element.removeClass('active');
      element.next().addClass('active');
    } else if (r > 255) {
      element.removeClass('active');
      element.prev().addClass('active');
      element = $('.questions-item.active');
      $('.questions-list li').removeClass('active');
      $('.' + element.data('item')).addClass('active');
    }
  });


  var countAll = 0,
    count = 0;

  function systemInterval() {
    $('.animationOne').removeClass('active');
    $('.blockOne-item').removeClass('active');
    countAll = $('.animationOne').length;
    $($('.animationOne')[count]).addClass('active');
    $($('.blockOne-item')[count]).addClass('active');
    count += 1;
    if (count == countAll) {
      count = 0;
    }

  }

  var sInterval = setInterval(systemInterval, 3000);
  $('.scrollbar-inner').scrollbar();
  $('.price-btn li').click(function () {
    $(this).parents('.plans-box').find('.price-btn li').removeClass('active');
    $(this).parents('.plans-box').find('.price li').removeClass('active');
    $(this).addClass('active');
    $('#' + $(this).data('price')).addClass('active');
  });

  $('.modal-btn').click(function (e) {
    e.preventDefault;
    $('#' + $(this).data('modal') + ' h4').text($(this).text());

    $('#' + $(this).data('modal')).show('400');
    $('.overlay').show('400');
    $('#' + $(this).data('modal')).animate({
      opacity: 1,
    }, 400);
    $('body').addClass('overl-h');
  });
  $('.overlay, .popup__close').click(function () {
    $('body').removeClass('overl-h');
    $('.modal').hide('400');
    $('.overlay').hide('400');
    $('.modal').animate({
      opacity: 0,
    }, 400);
  });
});