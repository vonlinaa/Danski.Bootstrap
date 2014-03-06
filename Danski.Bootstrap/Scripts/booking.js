$(document).ready(function () {
    /*----------------------------------------------------*/
    /*	Booking Accordion
    /*----------------------------------------------------*/

    // change arrow up and down
    /*
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
    */

    // td checkbox label touch
    $('.table-traveller-choices tr').click(function (event) {
        if (event.target.type !== 'checkbox') {
            $(':checkbox', this).trigger('click');
        }
    });
    /*
    // fix aside panel mobile <=> bigger screen size change with closed collapse
    $(function () {

        $(window).bind("resize", function () {
            console.log($(this).width())
            if ($(this).width() > 767) {
                $('#asideBookingPanel').addClass('in');
                $('#asideBookingPanel').css('height', "auto");
            }
            
        })
    })
    */
    /*----------------------------------------------------*/
    /*  Back To Top Button
    /*----------------------------------------------------*/

    $('.js-sticky-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });
     //
     // Search affix
     //
     function affix_ini() {
         
         if ($('#price-affix').length > 0) {
             var affixcontainer = $('#price-affix');
             var affixDummy = $('#affix-dummy');

             var affixHeight = affixcontainer.outerHeight(true);
             var offset = affixDummy.offset().top - affixHeight;
             var offsetBottom = $('.js-sticky-top').offset().top;
             // set heigt to dummy
             affixDummy.height(affixHeight);

             $('#price-affix').affix({
                 offset: {
                     top: offset
                 }
             });
         }
         if ($('#mobile-price-affix').length > 0) {
             var affixcontainer = $('#mobile-price-affix');
             var affixDummy = $('#affix-dummy');

             var affixHeight = affixcontainer.outerHeight(true);
             var offset = affixDummy.offset().top - affixHeight;
             var offsetBottom = $('.js-sticky-top').offset().top;
             // set heigt to dummy
             affixDummy.height(affixHeight);

             $('#mobile-price-affix').affix({
                 offset: {
                     top: offset
                 }
             });
         }
     }
     affix_ini();

     
});
