$(".menu-btn").on("click", function(){
  $(".menu-list").toggleClass("menu-list_active");
})
$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});