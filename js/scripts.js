$(document).submit(function(){
  event.preventDefault();

  let word = $("#vowel").val();

  for (let i = 0; i <= word.length; i++) {

    if(word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i" || word.charAt(i) === "o" || word.charAt(i) === "u"){
    $("#output").append("-");
    }
    else {     
      $("#output").append(word.charAt(i));
    }
    $("#vowel").val("");
  }
});





// Business Logic
// function vowelFinder(sentence) {
//   for (let i = 0; i <= sentence.length; i++) {
//     if(sentence.charAt(i) === "a" || sentence.charAt(i) === "e" || sentence.charAt(i) === "i" || sentence.charAt(i) === "o" || sentence.charAt(i) === "u"){
//       sentence[i] = "-";
//     }
//   }
//   return sentence;
// }

// // UI Logic
// $(document).submit(function(){
//   event.preventDefault();
//   const sentence = $("#vowel").val();
//   const transformedSentence = vowelFinder(sentence);
//   $("#output").append(transformedSentence);
// });