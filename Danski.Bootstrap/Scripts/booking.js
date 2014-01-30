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

    // td checkbox label
    $('.table-traveller-choices tr').click(function (event) {
        if (event.target.type !== 'checkbox') {
            $(':checkbox', this).trigger('click');
        }
    });

    // show/hide traveller-choices content

});
