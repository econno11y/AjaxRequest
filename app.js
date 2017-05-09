$('.btn').on('click', function() {
  $('.text').text('loading . . .');

  $.ajax({
    type:"GET",
    url:"https://api.meetup.com/2/cities",
    success: function(data) {
      //remove loading icon
      //create ul li with city names and zip
    },
    dataType: 'jsonp',

  });
  console.log(data.results)

 // function injectList(){
 // this.cityData = data();
 // var sContainer = document.getElementById("citylist");
 // for(var i = 0; i < this.cityData.results.length; i++)
 // { var cityID = "city-" + this.cityData.results[i].city;
 //   var listItem = document.createElement('li');
 //   var city = this.cityData.results[i].city;
 //   var zip = this.cityData.results[i].zipcode;
 //   listItem.innerHTML = city + zip "<a href='javascript:void(0)' onclick='readMore(true,"+this.oData[i].blogID+");'>Read More...</a>";
 //   listItem.id = cityID;
 //   sContainer.appendChild(listItem);
 // }
 //   this.injectList();
};
