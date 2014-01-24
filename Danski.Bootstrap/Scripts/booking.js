$(document).ready(function () {
    /*----------------------------------------------------*/
    /*	Booking Accordion
    /*----------------------------------------------------*/

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

});
