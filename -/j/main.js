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
        _anchor = $(this).attr('href');
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate(
            {scrollTop: target.offset().top}, 
            {
                duration: 800, 
                easing:"easeInOutQuart", 
                complete: function(){
                    history.pushState(null, null, _anchor);
                }
            }
        );

        return false;
    });   
          
          
   
         /*
          $('.submit').click(function(){
                    if($('#contact-name').val() == "") {
                       $('#contact-name').addClass('red');
                       
                     } else {
                         $('#contact-name').removeClass('red');
                     };
                     if($('#contact-email').val() == "") {
                        $('#contact-email').addClass('red');
                       
                      } else {
                          $('#contact-email').removeClass('red');
                      };
                      if($('#contact-message').val() == "") {
                         $('#contact-message').addClass('red');
                       
                       } else {
                           $('#contact-message').removeClass('red');
                       };
                     
                   });*/
         
          
          function validateForm()
          {
          var x=document.forms["contact-form"]["contact-name"].value;
          if (x==null || x=="")
            {
            alert("First name must be filled out");
            return false;
            }
          }

          
         
          
         

           

});

