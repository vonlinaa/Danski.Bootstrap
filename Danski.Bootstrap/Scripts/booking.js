$(document).ready(function () {
    /*----------------------------------------------------*/
    /*	Booking Accordion
    /*----------------------------------------------------*/

    // change arrow up and down
    $('.panel-title').click(function () {
        var state = $(this).find('a').attr('class');
        var arrow = $(this).find('span');

        if (state == "") {
            arrow.addClass('icon-arrow-down6');
            arrow.removeClass('icon-arrow-up5');
        }
        if (state == "collapsed") {
            arrow.addClass('icon-arrow-up5');
            arrow.removeClass('icon-arrow-down6');
        }
    })

    // show/hide traveller-choices content
    var checked = $('#checkboxChoicesNow').is(':checked')  // Boolean true
    
    $('#checkboxChoicesNow').click(function () {
        if (checked) {
            $('.traveller-choices-wrapper').slideUp();
            alert(checked);
        }
    })


});
