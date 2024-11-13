if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"S|",
					"S |",
					"S A|",
					"S A |",
					"S A I|",
					"S A I |",
					"S A I N|",
					"S A I N |",
					"S A I N T|",
					"S A I N T |",
					"S A I N T S |",
					"S A I N T S  |"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}