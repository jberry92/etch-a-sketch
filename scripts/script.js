//Function to clear the grid
function clearGrid(){
		$("#clearGrid").click(function(){
		$("#container > div").css("background-color", "#F5F5F5")
	});
	}
//Random color function
function randomCol(){
	$("#randomCol").click(function(){
	//Generate random color
		var safeColors = ['00','33','66','99','cc','ff'];
		var rand = function() {
    	return Math.floor(Math.random()*6);
		};
		var randomColor = function() {
    	var r = safeColors[rand()];
    	var g = safeColors[rand()];
    	var b = safeColors[rand()];
    	return "#"+r+g+b;
		};
		$("#container > div").mouseenter(function(){
        	$(this).css("background-color", randomColor);

		});
	});
}
//Function to change color back to black.
function monoChrome(){
	$("#mono").click(function(){
		$("#container > div").mouseenter(function(){
        	$(this).css("background-color", 'black');

	});
});
}

//Function to create new grid based on user input
function newGrid(){
	$("#newGrid").click(function(){
		clearGrid()
		var divCount = 1;
		var input = parseInt(prompt("Choose a size for your grid (Between 2 and 70):"), 10);
		$("#container").empty();

		for(divCount; divCount <= input * input; divCount++){
				$("#container").append("<div></div>");
		};
		//480 as that is the width of the div, -2 to compensate for borders.
		var height = (480 / input) - 2;
		$('#container > div').css('height', height);
		$('#container > div').css('width', height);
		$('#container > div').mouseenter(function(){
			$(this).css("background-color", 'black')

		});
	});

}		

//Main Code
$(document).ready(function(){
	
	
	var divn = 1
	
	for(divn; divn <= 256; divn++){
		$("#container").append("<div></div>");
	};
	$("#container > div").mouseenter(function(){
        $(this).css("background-color", 'black');
    });

    newGrid();
    clearGrid();
    randomCol();
    monoChrome();
});