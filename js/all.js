$(document).ready(function () {
  var showSkill = false;
  //滑動
  $('.scrollTop').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    //console.log(target, targetPos);
    $('html,body').animate({ scrollTop: targetPos }, 1000)
  });
  //加入class
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    //console.log(scrollPos);
    $('.scrollTop').each(function () {
      var target = $(this).attr('href');
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();
      //console.log(target, targetPos,targetHeight);
      if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
        console.log(target, 'aa');
        $('.scrollTop').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
    //動態進度條
    var skillTop = $('#skills').position().top;
    if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
      showSkill = true;
      $('#skills .progress-bar').each(function () {
        var thisValue = $(this).data('progress');
        $(this).css('width', thisValue + '%');
      })
    }
    //animated
    $('.animated').each(function () {
      var thisPos = $(this).offset().top;
      if ((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeIn');
      }
    })
    //bg scroll
    $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px');
    $('#header-ele').css('transform', 'translateY(' + (scrollPos / 2) + 'px)');
  });
});