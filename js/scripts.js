// Business logic
var pingPong = function(x) {
  var result = [];
  for (var i = 1; i <= x; i++) {
    if ((i % 15 === 0)) {
      result[i] = 'ping-pong';
    } else if ((i % 3) === 0) {
      result[i] = 'ping';
    } else if ((i % 5) === 0){
      result[i] = 'pong';
    } else {
      result[i] = i;
    }
  }

  return result;
}

// User interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var input = $("#number").val();
    var list = pingPong(parseInt(input));
    $("#output ul").empty();
    list.forEach(function(element) {
      $("#output ul").append("<li>" + element + "</li>");
    });
    $("#output").show();
  });
});
