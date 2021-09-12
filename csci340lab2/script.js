$(document).ready(function() {
  $('#catButton').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://api.thecatapi.com/v1/images/search?format=json",
      success: function(results) {
        console.log(results["0"]);
          console.log("testing success");
          $('#cat').attr("src", results[0]["url"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $('#catButton').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://api.thedogapi.com/v1/images/search?format=json",
      success: function(results) {
        console.log(results["0"]);
          console.log("dog success");
          $('#dog').attr("src", results[0]["url"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
  });
});
});
