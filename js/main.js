var uChoice = null      //Sets variables that can be used throughout.
var cChoice = null


function computerChoice(){    //function to get random computer choice R/P/S
  var arrayRps = ["rock", "paper", "scissors"]   //init array with R/P/S
  var compChoice = arrayRps[Math.floor(Math.random()* 3)]  //creat variable to get/store random R/P/S instead of arrayRps[0,1,2]
  cChoice =  compChoice       //assign local variable compChoice to document variable choice
  console.log(compChoice)     //print to console to for testing. ensure random generation
}

function startGame(e) {             //start game function(element)
  var choice = e.target.id     //assign the user choice from target.id to local variable choice
  uChoice = choice             //assign choice to uChoice ^ from top. reassigns from null
  console.log(choice)          // prints choice to console for testing
  computerChoice()            //runs function computerChoice()
  console.log(compare())
  //results()    //will print the results of my compare function below to console for testing
}

// var head2 = document.createElement("h2");
// var node = document.createTextNode(result);
// head2.appendChild(node);
// var element = document.getElementById("result");
// element.appendChild(head2);

// outcomes to add to compare() function
          // TIES: uChoice == cChoice ( Rock rock, paper paper, scissors scissors)
          // Rock paper  : User loses
          // Rock Scissors : user wins
          // Paper Rock  : user wins
          // Paper Scissors : user loses
          // Scissors Paper : user wins
          // scissors Rock  : user loses

function compare(){
  if (uChoice == cChoice){
    return "Looks like a tie"
    var result = "Tie";
  }else if(uChoice == "rock" && cChoice == "paper") {
    return "oooooof.  You lose."
    result = "You Lose."
  }else if (uChoice == "rock" && cChoice == "scissors"){
    return "Eyyyyy! You win!"
    result = "You Win!"
  }else if (uChoice == "paper" && cChoice == "rock" ){
    return "Eyyyyy! You Win!"
    result = "You Win!"
  }else if (uChoice == "paper" && cChoice == "scissors" ){
    return "oooooof.  You lose."
    result = "You Lose."
  }else if (uChoice == "scissors" && cChoice == "paper" ){
    return "Eyyyyy! You Win!"
    result = "You Win!"
  }else if (uChoice == "scissors" && cChoice == "rock"){
    return "oooooof.  You lose."
    result = "You Lose."
  }
}

// function results(){
// var newh2 = document.createElement("h2");
// var node = document.createTextNode(result);
// newh2.appendChild(node);
// var element = document.getElementById("result");
// element.appendChild(newh2);
// }

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}
