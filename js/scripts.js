$(document).submit(function(){
  event.preventDefault();

  let word = $("#vowel").val();

  for (let i = 0; i <= word.length; i++) {

    if(word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i" || word.charAt(i) === "o" || word.charAt(i) === "u"){
    //console.log("-");
    $("#output").append("-");
    }
    else {
      //console.log(word.charAt(i));
      $("#output").append(word.charAt(i));

    
    }
    $("#vowel").val("");
  }
});