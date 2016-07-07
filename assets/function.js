$(document).ready(function() {
 function timeToScroll(){
    var currentHour = getHours();
    var yes = true;

var x = $('#cursing').typed({
		strings:["Good morning and welcome to my", "Buenos días y bienvenidos a mi","Bom dia e boas-vindas ao meu","Guten Morgen und herzlich willkommen auf meiner", "早上好，欢迎来到我的", "おはようございますとへようこそ私", "Доброе утро и добро пожаловать в мой", "Tere hommikust ja tere tulemast minu"],
		typeSpeed: 1,
		backDelay: 3000,
		loop: true,
		loopCount: 500
	});
var y = $('#cursing').typed({
		strings:["GOOD AFTERNOON and welcome to my", "Buenos días y bienvenidos a mi","Bom dia e boas-vindas ao meu","Guten Morgen und herzlich willkommen auf meiner", "早上好，欢迎来到我的", "おはようございますとへようこそ私", "Доброе утро и добро пожаловать в мой", "Tere hommikust ja tere tulemast minu"],
		typeSpeed: 1,
		backDelay: 3000,
		loop: true,
		loopCount: 500
	});

	if(yes == true) {
		alert("Well Atleast we know it works");

	} else {
		document.write(y);
	}
}
});



	// var theTime = $.now()
	// var scrollingText =