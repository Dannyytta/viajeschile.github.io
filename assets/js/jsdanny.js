$(document).ready(function(){


    /*funcion para scrollspy*/
    $('body').scrollspy({target: 'scrollspy', offset:70});

    $('.nav-link').click(function(){
        $('html,body').animate({
            scrollTop: $( $(this).attr('href').offset().botton - 70
        }, 50);
        return false;
        });
    });

