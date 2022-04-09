jQuery(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();

    $("#language").hide();
    $("#javascript").hide();
    $("#python").hide();
    $("#rust").hide();

    const name = $("input#name").val();
    const langGuess = $("input#langGuess").val();
    const risk = $("#risk").val();
    const dog = $("#dog").val();
    const color = $("#color").val();

    if(risk === 1 || 2 && dog === 1 || 2) {
      $("#javascript").show();
    } else if (risk === 3 && dog === 3) {
      $("#python").show();
    } else {
      $("#rust").show();
    }
  });
})