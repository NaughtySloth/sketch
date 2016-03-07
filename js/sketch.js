$(document).ready(function() {
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container');
        }
    }
   $('#container').on('mouseenter','.unit',function(){
   	$(this).addClass('enter');
   	
   });

   $('#container').on('mouseleave','.unit',function(){
   		$(this).removeClass('hover');
   });

   $('#container').on('mouseover','.unit',function(){

   		$(this).addClass('hover');
   });


   $('button').click(function(){
   	$('.unit').remove();

   	var rows=prompt("How many rows do you want?");
   	var collumns=prompt("How many collumns do you want?");
   	for(var x = 0; x < rows; x++) {
        for(var y = 0; y < collumns; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container');
        }
    }
            
  	$('.unit').css({
  		width:function(){
  			return (960-2*collumns)/collumns;
  		},
  		height:function(){
  			return (960-2*collumns)/collumns;
  		}

  	});

        
    

   });

   

    });

