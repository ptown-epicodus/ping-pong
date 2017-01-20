// Business logic
var pingPong = function(x) {
  var result = [];
  for (var i = 1; i <= x; i++) {
    result[i] = i;
  }

  return result;
}

// User interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var input = $("#number").val();
    var list = pingPong(parseInt(input));
    list.forEach(function(element) {
      $("#output ul").append("<li>" + element + "</li>");
    });
    $("#output").show();
  });
});
