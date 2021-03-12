//меню
//$(".nav_trigger").click(function(){
//	$(".nav_panel").toggle("fast");
//	$(this).toggleClass("nav_trigger-active");
//	return false;
//});
//$("a").click(function(){ //закрыть меню после перехода по ссылке
//	$(".nav_panel").hide("fast");
//	$(".nav_trigger").removeClass("nav_trigger-active");
//});
//$(document).click(function(event) {
//	$(".nav_panel").hide("fast");
//	$(".nav_trigger").removeClass("nav_trigger-active");
//	});


    function myFunction() {
        document.getElementById("myNav_trigger_wrap").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.nav_trigger')) {
    
        var dropdowns = document.getElementsByClassName("nav_link-wrap");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }