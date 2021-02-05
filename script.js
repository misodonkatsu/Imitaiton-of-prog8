// レッスン hoverイベント
$('.lesson').hover(
	function() {$(this).find('.text-contents').addClass('active');},
	function() {$(this).find('.text-contents').removeClass('active');}
);

// ログインmodal
$("#js-login-show").click(function() {
	$("#js-login-modal").fadeIn();
});

// 新規登録modal
document.addEventListener('click', e => {
	if (e.target.matches('.signup') || (e.target.matches('#js-signup')) ) {
		$("#js-signup-modal").fadeIn();
	}
});

// modal閉じる
$('.close-modal').click(function(){
	$('#js-login-modal').fadeOut();
	$('#js-signup-modal').fadeOut();
});

// TOPへ戻る
$(function(){
  $('a[href^="#js-toTop"]').click(function() {

    const speed = 500;
    const href= $(this).attr("href");
    const target = $(href == "#js-toTop" || href == "" ? 'html' : href);
    const position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// Lessonへスクロール
$(function(){
  $('a[href^="#js-toLesson"]').click(function () {

		const position = $('#js-lessons').offset().top;
		const speed = 500;
		$("html,body").animate({scrollTop:position},speed);
		return false;
	});
});


// スマホ用ヘッダーメニュー
let menu_toggle = false;

$('#menuBtn').click(function() {
	if (menu_toggle === false) {
		$('.header-right').fadeIn(1000);
		$('#js-lessonBtn').css("display", "none");
		menu_toggle = true;
	} else {
		$('.header-right').fadeOut(1000);
		menu_toggle = false;
	}
});

