// slide menu 여닫기
function slideMenuHandler() {
  $(".slide_menu_wr").toggleClass("on");
  $(".dim").fadeToggle();
  $(".body_wr").toggleClass("notScroll");
}
// 스크롤 시작하면 헤더에 배경 추가
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    }
  });
});
