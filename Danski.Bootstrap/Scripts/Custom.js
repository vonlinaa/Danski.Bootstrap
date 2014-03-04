﻿$(document).ready(function () {
    /*----------------------------------------------------*/
    /*	Functions on resize
    /*----------------------------------------------------*/
    $(window).resize(function () {
        
        affix_ini();
    });
    affix_ini();

    /*----------------------------------------------------*/
    /*	Back To Top Button
    /*----------------------------------------------------*/

    $('#scroll-top-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });
     
    //
    // section-expand
    //
    $('.section-expand').click(function () {
        var button = $(this);

        var rel = button.attr('rel');
        
        button.addClass('current');

        // show section
        $('#' + rel).show();


        return false;
    });

    // room type collapse
    $('.collapsebox').on('show.bs.collapse', function () {
        var p = $(this).parent();
        p.addClass('active')
        
    })
    $('.collapsebox').on('hide.bs.collapse', function () {
        var p = $(this).parent();
        p.removeClass('active')

    })


   
  

     //
     // extended search
     //
    $('#show-extended-search').click(function () {
        var button = $(this);
        
        if (button.hasClass('open')) {
            $('#extended-search').hide();

            button.find('.closed').removeClass('hidden');
            button.find('.open').addClass('hidden');
            button.removeClass('open');
        }
        else {
            // show section
            $('#extended-search').show();
            button.find('.open').removeClass('hidden');
            button.find('.closed').addClass('hidden');

            button.addClass('open');
        }
  
        return false;
    });

     //
     // inline gallery
     //
    
   
    
    $('.inline-gallery .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
    
    $('#inlineCarousel').carousel({
        interval: 4000
    });
    

     //
     // list / grid 
     //
    $('#view-toggle .btn').click(function () {

        var state = $(this).attr('data-view');
        var view = $("#view-grid-list");

        if (!view.hasClass(state)) {
            
            if (state === 'grid')
            {
                view.addClass('grid');
                view.removeClass('list');
            }
            if (state === 'list')
            {
                view.addClass('list');
                view.removeClass('grid');
            }
            
        }
       

        

    });

    
    $('#top-navigation').on({
        "shown.bs.dropdown": function () {

            $(document.body).addClass('modal-open navigation');
            $('<div class="modal-backdrop fade in"></div>').appendTo(document.body);
            
          
        },
        
        "hide.bs.dropdown": function () {
            $(document.body).removeClass('modal-open');
            $(".modal-backdrop").remove();
        }
    });
    
 });
////////////////////
// Responsive menu
///////////////////

 (function ($) {
     $(document).ready(function () {
         $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
             event.preventDefault();
             event.stopPropagation();
             $(this).parent().siblings().removeClass('open');
             $(this).parent().toggleClass('open');
         });
     });
 })(jQuery);

////////////////////
// Fix menu to close
///////////////////
 $(document).on('click', '.yamm .dropdown-menu', function (e) {
     e.stopPropagation();
 });

////////////////////
// Windows 8 phone fix
///////////////////
 if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
     var msViewportStyle = document.createElement('style');
         msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
         document.querySelector('head').appendChild(msViewportStyle);
 }



 //
 // Search affix
 //
 function affix_ini() {
     
     if ($('#search-affix').length > 0) {
         var affixcontainer = $('#search-affix');
         var affixDummy = $('#affix-dummy');

         var affixHeight = affixcontainer.outerHeight(true);
         var offset = affixDummy.offset().top - affixHeight;
         var offsetBottom = $('#scroll-top-top').offset().top;
         // set heigt to dummy
         affixDummy.height(affixHeight);

         $('#search-affix').affix({
             offset: {
                 top: offset
             }
         });
     }
 }


/* --------------------------------------------------------------------------- */
/*  Google Maps
/* --------------------------------------------------------------------------- */
var map;

function initGmap() {
    var markers = [];
    var infowindows = [];
    var active_info = null;

    //http://demo-ee.com/examples/view/pink-styled-google-maps-with-custom-infowindows?codekitCB=410807051.425406

    var locations = [
       /*
            0: id
            1: Title
            2: Description
            3: long
            4: lat
       */

      [1, 'Alpe d’Huez','Frankrig, 6 rejsemål', 45.09308,6.068466],
      [2, 'Titel','beskrivelse', 46.088472,3.460693],
      [3, 'Titel', 'beskrivelse', 46.188472, 5.560693],
      [4, 'Titel', 'beskrivelse', 46.388472, 4.460693],
      [5, 'Titel', 'beskrivelse', 46.088472, 4.460693]
    ];
       
    var latlng = new google.maps.LatLng(45.383019, 9.788818),
        $mapOptions = {
            streetViewControl: true,
            zoom: 7,
            scrollwheel: false,
            center: latlng,
            panControl: false,
            zoomControl: true,
            scaleControl: false,
            mapTypeControl: true,
            draggable: true,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style'],

            }
        };
    map = new google.maps.Map(document.getElementById('google-map'), $mapOptions);

    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][3], locations[i][4]),
            icon: new google.maps.MarkerImage(
                   '../css/images/google-map-marker.png',
                   new google.maps.Size(49, 65),
                   new google.maps.Point(0, 0),
                   new google.maps.Point(24, 65)
            ),
            id: (locations[i][0]),
            map: map
        });

        markers.push(marker);
        var myOptions = {
            content: '<a href="#link" class="inner"><i class="icon-arrow-right6"></i><div class="caption"><h5>' + locations[i][1] + '</h5><h6>' + locations[i][2] + '</h6></div></a>',
            disableAutoPan: false,
            maxWidth: 0,
            alignBottom: true,
            pixelOffset: new google.maps.Size(-90, -20),
            zIndex: null,
            boxClass: "info-windows",
            closeBoxURL: "",
            pane: "floatPane",
            enableEventPropagation: false,
            infoBoxClearance: "10px",
            position: marker.position
        };
        var infowindow = new InfoBox(myOptions); // infoWindow w/ infobox.js
        infowindows[marker.id] = infowindow;

        google.maps.event.addListener(markers[markers.length - 1], 'click', function () {
            if (active_info) {
                infowindows[active_info].close();
            }
            active_info = this.id;
            infowindows[this.id].open(this.map);
            return false;
        });
    }
}
$(document).ready(function () {
    if ($("#google-map").length > 0)
    { initGmap(); }
});


