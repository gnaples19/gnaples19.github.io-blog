
$(document).ready(function() {
$('.button').click(function() {
  $.ajax({
    dataType: "json",
    jsonpCallback: "parseQuote",
    url: "https://breaking-bad-quotes.herokuapp.com/v1/quotes?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
    success: function(results) {
      $('.qoute').text(results["quoteText"]);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
});
});
