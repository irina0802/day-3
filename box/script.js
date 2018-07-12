for (var i = 0; i < 300; i++){
	document.querySelector('.container').innerHTML += "<div class = 'box'></div>";
}

var arrayOfBoxes = document.querySelectorAll(".box");

for (var i = 0; i < arrayOfBoxes.length; i ++){
	if (i % 4 === 0){
		arrayOfBoxes[i].style.background = "lavender";
	}else if (i % 3 === 0) {
		arrayOfBoxes[i].style.background = "lightblue";
	}else{
		arrayOfBoxes[i].style.background = "lightpink";
	}
	
}