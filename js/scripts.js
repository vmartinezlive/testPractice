var combineLetter = function(letter1, letter2) {
    return letter1.toUpperCase() + letter2.toUpperCase();
}





$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
  var newSentence = $("#inputSentence").val();
  var firstLetter = newSentence.charAt(0);
  var lastLetter = newSentence.charAt(newSentence.length - 1);

  var lastAndFirst = combineLetter(firstLetter, lastLetter);
  var finalSentence = lastAndFirst.concat(newSentence);


    $("#output").append(finalSentence);

  });
});
