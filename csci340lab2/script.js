
$(document).ready(function() {
$('.cookie').click(function() {
  $.ajax({
    dataType: "jsonp",
    jsonpCallback: "parseQuote",
    url: "https://breaking-bad-quotes.herokuapp.com/v1/quotes",
    success: function(results) {
      $('.qoute').text(results["quoteText"]);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
});
});
