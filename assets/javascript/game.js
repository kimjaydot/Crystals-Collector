  $( document ).ready(function(){
  var Random=Math.floor(Math.random()*102+19)
  //Generates random number between 19 -120

  $('#randomNumber').text(Random);
  // Updates random number in HTML
  
  var num1= Math.floor(Math.random()*12+1)
  var num2= Math.floor(Math.random()*12+1)
  var num3= Math.floor(Math.random()*12+1)
  var num4= Math.floor(Math.random()*12+1)
  //Generates a random number for each crystal to be between 1 -12
  //Math.floor(Math.random() * ((y-x) +1) + x)

  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Starting scores

$('#numWins').text(wins);
$('#numLosses').text(losses);

//Resets the game
function reset(){
      Random=Math.floor(Math.random()*102+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*12+1);
      num2= Math.floor(Math.random()*12+1);
      num3= Math.floor(Math.random()*12+1);
      num4= Math.floor(Math.random()*12+1);
      playerTotal= 0;
      $('#finalScore').text(playerTotal);
      } 
//Adds Wins to players score
function woohoo(){
alert("Ahoy, matey,you won!");
  wins++; 
  $('#numWins').text(wins);
  reset();
}
//Adds Losses to players score
function loser(){
alert ("Ahoy, matey, you lose!");
  losses++;
  $('#numLosses').text(losses);
  reset()
}
//Functions when clicking jewels
  $('#blue-cry').on ('click', function(){
    playerTotal = playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $('#finalScore').text(playerTotal); 
          //Win & lose conditions
        if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        }   
  })  
  $('#green-cry').on ('click', function(){
    playerTotal = playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $('#finalScore').text(playerTotal); 
        if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('#purple-cry').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $('#finalScore').text(playerTotal);

          if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })  
  $('#yellow-cry').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $('#finalScore').text(playerTotal); 
      
          if (playerTotal == Random){
          woohoo();
        }
        else if ( playerTotal > Random){
          loser();
        }
  });   
}); 