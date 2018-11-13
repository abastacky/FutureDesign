$(document).ready(function(){

// var d=true;
$('.question div').on("click",function(){
	$('#valid').toggle();

	$('.whiteBG').toggleClass( "expanded" );
	// $(".onlyifyouwant").slideToggle( "slow");
	// $(".onlyifyouwant").slideLeft();
 //    Animation complete.


	//use this to toggle, it works(the following 5 lines)!
	// $('.whiteBG').animate({
	// 	height: d ? '100vh': '78vh'
	// })

	// d=!d;



	// $('.question div').on("click",function(){
	// 	if(d==false){
	// 		$('.whiteBG').animate({
	// 			height:'78vh'
	// 		})
	// 	}
});	
	// if (d==false) {
	// $('.question div').on("click",function(){	
	// 	$('.whiteBG').animate({
	// 	height: '78vh',
	// })
	// }
	// };	
  //       else {
  //           $('.whiteBG').animate({
		// 	height: '78vh'
		// })


// 	  $( ".whiteBG" ).slideToggle( "slow", function() {
//     // Animation complete.
//   });
// });	




$( function() {
    	$( "#valid" ).draggable();
 	} );


});	