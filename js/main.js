var uChoice = null      //Sets variables that can be used throughout.
var cChoice = null      //These are set in the functions below.


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
  console.log(compare())      //will print the results of my compare function below to console for testing
}


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
    return "tie"
  }else if(uChoice == "rock" && cChoice == "paper" ) {


  }else if (......){

  }


}



var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}
