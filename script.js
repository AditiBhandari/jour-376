$(document).ready(function(){
	$( "#audio-text" ).click(function() {
	  $( "#transcript" ).toggle( "fast", function() {
	    // Animation complete.
	  });
	});

	$( "#flowchart-btn" ).click(function() {
	  $( "#flowchart" ).toggle( "fast", function() {
	    // Animation complete.
	  });
	});
});