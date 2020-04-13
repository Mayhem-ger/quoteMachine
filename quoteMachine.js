$(document).ready(function(){

$("#button").click(function ()
  {
    $.ajax(settings).done(function (response) {
    	//feedback.push(response[0].quote);
      console.log(response[0].quote, response[0].character)

      $("#test").text(response[0].quote);
      $("#author").text(response[0].character);
      //feedback.push(response[0].author);

    });

  });

  var settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://thesimpsonsquoteapi.glitch.me/quotes",
  	"method": "GET",
  }

});
