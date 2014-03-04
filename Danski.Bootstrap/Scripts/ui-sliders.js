
  $(function() {
      $("#slider-total-price").slider({
          range: "min",
          value: 9500,
          min: 7000,
          max: 15000,
          slide: function( event, ui ) {
              $("#label-total-price").text(ui.value + ",-");
          }
      });

      // $("#label-total-price").text("$" + $("slider-total-price").slider("value"));

      $("#slider-distance-to-pist").slider({
          range: "min",
          value: 250,
          min: 0,
          max: 1500,
          slide: function (event, ui) {
              $("#label-distance-to-pist").text(ui.value + " m");
          }
      });

      $("#slider-stars").slider({
          range: "min",
          value: 2,
          min: 1,
          max: 5,
          step: 1,
          slide: function (event, ui) {

              // remove all filled stars
              $("#slider-icon-stars i").removeClass('filled');

              var numberOfFilledStars = ui.value;
              // set new filled
              $("#slider-icon-stars i:lt("+numberOfFilledStars+")").addClass('filled');

          }
      });
  });
