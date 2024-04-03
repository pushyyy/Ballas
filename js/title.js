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
					"B|",
					"B |",
					"B A|",
					"B A |",
					"B A L|",
					"B A L |",
					"B A L L|",
					"B A L L |",
					"B A L L A|",
					"B A L L A |",
					"B A L L A S |",
					"B A L L A S  |"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}