var userSentence = "";
var result = "";
var sentenceStrip = "";
var searchTerm = /\W\s*/g;
var column = 0;
var outputArray = [];
var finalArray = [];



var encryptSentence = function(string) {
  sentenceStrip = userSentence.toLowerCase().replace(searchTerm,"");
  var sentenceStripLength = sentenceStrip.length;
  column = Math.ceil(Math.pow(sentenceStripLength,0.5));

  var moveIndex = 0;

  for (var index = 0; index < column; index++) {
    for (var i = moveIndex; i < sentenceStripLength; i += column) {
      outputArray.push(sentenceStrip.charAt(i));
      }
    moveIndex++;
  }



  finalArray = outputArray.map(function(letter) {
    if ((outputArray.indexOf(letter)%column === 0)&&(outputArray.indexOf(letter)>0)) {
      return " " + letter;
    } else {
      return letter;
    }
  });




  result = finalArray.join("");
  return result;
}

$(document).ready(function(){
  $("form#encrypt").submit(function(event){

    userSentence = $("input#userSentence").val();

    encryptSentence(userSentence);

    $("p#showEncrypt").text(result);

    event.preventDefault();
  });
});
