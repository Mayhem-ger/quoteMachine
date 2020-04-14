$(document).ready(function(){

$("#new-quote").click(function ()
  {
    $.ajax(settings).done(function (response) {
    	//feedback.push(response[0].quote);
      $("#text").text(response[0].quote);
      let quoteText = response[0].quote;
      $("#author").text(response[0].character);
    });

  });

$(".twitter-share-button").attr("href", "www.bild.de");

  var settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://thesimpsonsquoteapi.glitch.me/quotes",
  	"method": "GET",
  }

});
