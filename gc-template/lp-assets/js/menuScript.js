$(document).ready(function() {

$("#closeBtnMenu").click(function(){
	   $("#navMenu").css({"width":"0"});
	      $(".ulNav li a").css({"color":"#111"});
	      $(".ulNav li a").css({"background":"rgb(224, 198, 223)"});
	      $("#closeBtnMenu").css({"color":"#111"});	      
})

$("#openNav").click(function(){
		      $(".ulNav li a").css({"color":"#ffffff"});
	      $(".ulNav li a").css({"background":"rgb(224, 198, 223)"});
	       $("#closeBtnMenu").css({"color":"#ffffff"});
	     $("#navMenu").css({"width":"100%"});
})
});




