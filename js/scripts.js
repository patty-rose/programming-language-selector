function languageCheck(langGuess, lang) {
  langGuess = langGuess.toLowerCase();
  langLowerCase = lang.toLowerCase();
  let langCheck = ""
  let strCheck = langGuess.search(langLowerCase);
  if (strCheck === -1) {
    return langGuess.charAt(0).toUpperCase() + langGuess.slice(1) + " would be fun to learn! But we think you should learn " + lang + "!";
  } return ("you were right! You should learn " + lang + "!");
};

jQuery(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    $(".hide").hide();
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
      lang = "Javascript";
      $("#javascript").show();
    } else if (risk === "2" && dog === "3" || risk === "3") {
      lang = "Python";
      $("#python").show();
    } else {
      lang = "Rust";
      $("#rust").show();
    };

    $(".name").text(name + ", " + languageCheck(langGuess, lang));
  });
})