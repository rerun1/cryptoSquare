var userSentence = "";
var result = "";

var encryptSentence = function(string) {
  var sentenceStrip = userSentence.toLowerCase().replace(/\W\s*/g,"");
  var sentenceStripLength = sentenceStrip.length;
  var column = Math.ceil(Math.pow(sentenceStripLength,0.5));

  var moveIndex = 0;
  var outputArray = [];

  for (var index = 0; index < column; index++) {
    for (var i = moveIndex; i < sentenceStripLength; i += column) {
      outputArray.push(sentenceStrip.charAt(i));
      }
    moveIndex++;
  }

  var outputString = outputArray.join("");

  var finalArray = outputString.match(/.{1,5}/g);

  var finalString = finalArray.join(" ");

  result = finalString;


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
