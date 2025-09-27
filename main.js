// ハンバーガー
$(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("active");
    $("#header .navi").toggleClass("active");
  });

  $(".navi a").click(function(){
    $(".hamburger").removeClass("active");
    $("#header .navi").removeClass("active");
  })
});

// スクロール画像文字
$(function(){
  $(".qa_item .text").hide();
  $(".qa_item .sub_title").click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });
});