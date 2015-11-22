var divn = 1
var divcount = 256

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


$(document).ready(function(){
	function newGrid() {
		$("#newGrid").click(function(){
		divcount = 0
		$("#container").empty();
		divcount = parseInt(prompt("Enter the size for your new grid!"));
		dimension = 480 / divcount - 2
		alert(dimension)
		divcount = divcount * divcount;
		$("#container > div").css({
			"height": dimension,
			"width": dimension
		});
		for(divn; divn <= divcount; divn++){
			$("#container").append("<div></div>");
		};
		$("#container > div").mouseenter(function(){
        	$(this).css("background-color", randomColor);
    });
	}

	
	});
	function clear(){
		$("#clearGrid").click(function(){
		$("#container > div").css("background-color", "#F5F5F5")
	});
	}	
	

	for(divn; divn <= divcount; divn++){
		$("#container").append("<div></div>");
	};
	$("#container > div").mouseenter(function(){
        $(this).css("background-color", randomColor);
    });
});