
$(document).ready(function() {
$('.button').click(function() {
  $.ajax({
    dataType: "json",
    //jsonpCallback: "parseQuote",
    url: "https://breaking-bad-quotes.herokuapp.com/v1/quotes",
    success: function(results) {
      $('.qoute').text(results["qoutes"]);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
});
});
