function languageCheck(langGuess, lang) {
  let langCheck = ""
  let strCheck = langGuess.search(/lang/i);
  if (strCheck === -1) {
    langCheck = "false";
  } else langCheck = "true";
};

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
    let lang = "";

    if (risk === "1" && dog === "1" || dog === "2") {
      lang = "javascript";
      $("#javascript").show();
    } else if (risk === "2" && dog === "3" || risk === "3") {
      lang = "python"
      $("#python").show();
    } else {
      lang = "rust";
      $("#rust").show();
    };

    $(".name").text(name + ", you should learn " + lang + "!");
    console.log(langGuess);
    console.log(languageCheck(langGuess, lang));
  });
})