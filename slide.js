$(function() {
  // toggleChangeBtn();

  $('.index-btn').click(function() {
    var $nowDisplaySlide = $(this).parent().prev();
    $nowDisplaySlide.find('.active').removeClass('active');
    var clickedIndex = $(this).parents().children('.index-btn').index($(this));
    $nowDisplaySlide.find('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });

  $('.change-btn').click(function() {
    var $displaySlide = $(this).parent().next().find('.active');
    $displaySlide.removeClass('active');
    if($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });

  function toggleChangeBtn() {
    var $this = $('.change-btn-wrapper');
    $pointer.find('.prev-btn').show();
    $pointer.find('.next-btn').show();
    // $('#name').text($this.parent().siblings('.slides').find('.slide').index($this.parent().siblings().find('.active'));
    // console.log($this.parent().find('.slide').index($(this).parent().find('.active')));
    // var slideIndex = $(this).parent().siblings('.slider').children('.slide').index($('.active'));
    // $('#name').txt($(this).parent().siblings('.slider').attr('class'));
    // if (slideIndex == 0) {
    //   $pointer.children('.prev-btn').hide();
    // } else if (slideIndex == $('.slide').length-1) {
    //   $pointer.children('.next-btn').hide();
    // }
  }
});
