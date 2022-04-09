jQuery(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();

    $("#language").hide();
    $("#javascript").hide();
    $("#python").hide();
    $("#rust").hide();

    const name = $("input#name").val();
    const langGuess = $("input#langGuess").val();
    // if langGuess contains name of language the survey returned. then return "congrats, your guess was right!!" else return Sorry, you should not learn "input", you should learn "PYTHON!"
    const risk = $("#risk").val();
    const dog = $("#dog").val();
    const color = $("#color").val();
    const lang = "";

    console.log(name);
    console.log(langGuess);
    console.log(color);

    if(risk === "1" && dog === "1" || dog === "2") {
      lang = "javascript";
      $("#javascript").show();
    } else if (risk === "2" && dog === "3" || risk === "3") {
      lang = "python";
      $("#python").show();
    } else {
      lang = "rust";
      $("#rust").show();
    }
    
    $(".name").text(name + ", you should learn Javascript!");
  });
})