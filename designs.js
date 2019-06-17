// Select color input
// Select size input

$(document).ready(function () {
	var color, height, weight;
	// width
    color = $("#colorPicker"); // color
	$('#sizePicker').submit(function makeGrid (event) {
		event.preventDefault(); // clears previously created grid
		$('tr').remove();
		var height = $("#inputHeight").val();   // height
    	var weight = $("#inputWeight").val(); 
    	console.log(height, weight)
		for (var i = 1; i <= height; i++) {
			let row = $('<tr></tr>');
			for (var j = 1; j <= weight; j++) {
				row.append($('<td></td>'));
			}
			$('table').append(row);
			$("td").attr("class", "cells");
		}

		event.preventDefault();
		$('.cells').click(function (event) {
			var paint = color.val();
			$(event.target).css('background-color', paint);
		});
	}); 
});


