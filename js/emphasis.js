// $(document).ready(function() {  
  
//set opacity to 0.4 for all the images  
//opacity = 1 - completely opaque  
//opacity = 0 - invisible  
  
// $('.item img').css('opacity', 1);  
// $('.item span').css('opacity', 0);  

// when hover over the selected image change the opacity to 1  
// $('.item div').hover(  
//    function(){  
//       $(this).find('img').stop(false,true).fadeTo('slow', 0.3); 
//       $(this).find('span').stop(false,true).fadeIn(200);
//    },  
//    function(){  
//       $(this).find('img').stop().fadeTo('slow', 1);
//       $(this).find('span').stop(false,true).fadeOut(200);
//    });  
// });

// $(window).load(function(){
//   $('.hcaption').hcaptions();
// });

$(document).ready( function() {

    $('.gallery-item').hover( function() {
      $(this).find('img').stop(false,true).fadeTo('slow', 0.3);
    }, function() {
      $(this).find('img').stop().fadeTo('slow', 1);
    });
});
// $(document).ready(function() {
//     //move the image in pixel
//     var move = 0;
//     
//     //zoom percentage, 1.2 =120%
//     var zoom = 1.2;
//     //On mouse over those thumbnail
//     $('.item').hover(function() {
//         
//         //Set the width and height according to the zoom percentage
//         width = $('.item').width() * zoom;
//         height = $('.item').height() * zoom;
//         
//         //Move and zoom the image
//         $(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});
//         
//         //Display the caption
//         // $(this).find('div caption').stop(false,true).fadeIn(200);
//     },
//     function() {
//         //Reset the image
//         $(this).find('img').stop(false,true).animate({'width':$('.item').width(), 'height':$('.item').height(), 'top':'0', 'left':'0'}, {duration:100});    
//         //Hide the caption
//         // $(this).find('div.caption').stop(false,true).fadeOut(200);
//     });
// });
