$('.btn').on('click', function() {
  $('.text').text('loading . . .');

  $.ajax({
    type:"GET",
    url:"https://api.meetup.com/2/cities",
    success: function(data) {
      //remove loading icon
      //create ul li with city names and zip
      console.log(data.results)
      var sContainer = document.getElementById("citylist");
      for(var i = 0; i < data.results.length; i++) {
        var city = data.results[i].city;
        var zip = data.results[i].zip;
        $(".text").remove();
        $('#citylist').append("<li class='display'><strong>" + city + "</strong>"+ ": " + zip + "</li>");
      }
    },
    dataType: 'jsonp',
  });
});

$( document ).ajaxSuccess(function( event, request, settings ) {
  alert( "Successful Request!" );
});

$( document ).ajaxError(function( event, request, settings ) {
  alert( "Check yourself!" );;
});
