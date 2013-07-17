$(document).ready(function () {
    
    // how many h2 with class .section-heading ]
    
    $('.section-heading').each(function(n){
        
        
        var section   = $(this);
        var sectionHeight = section.offset().top;
        var docHeight = $(document).height();
        var navPosition = sectionHeight / docHeight * 100;
        // var topHeight = topHeight;
        var myID = $(this).parent().attr("id");
        /*
        console.log(sectionHeight);
        console.log(docHeight);*/

        
        
        
        $('.nav').append('<li class="nav-button" style="top:'+ navPosition +'%;"><a class="nav-button-link" href="#' + myID + '">' + $(this).html() + '</a></li>');
        
          
        
      
        
    });
    
    
    $('.nav-button a[href^="#"]').click(function() {
              var target = $(this.hash);
              if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
              if (target.length == 0) target = $('html');
/*              $('html, body').animate({ scrollTop: target.offset().top }, 1000, "easeInOut" );*/
               $('html, body').animate({ scrollTop: target.offset().top }, {duration: 800, easing:"easeInOutQuart"});
              
              return false;
          });
          
          
          
          
          
          
         
          
         

           

});

