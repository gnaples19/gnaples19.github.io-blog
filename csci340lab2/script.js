
$(document).ready(function() {
$('.button').click(function() {
  $.ajax({
    dataType: "jsonp",
    jsonpCallback: "getQuote",
    url: "https://breaking-bad-quotes.herokuapp.com/v1/quotes",
    success: function(results) {
      $('.qoute').text(results["qoute"]);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
});
});
