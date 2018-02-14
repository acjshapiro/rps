var uChoice = null      //Sets variables that can be used throughout.
var cChoice = null      //These are set in the functions below.


function computerChoice(){
  var arrayRps = ["rock", "paper", "scissors"]
  var compChoice = arrayRps[Math.floor(Math.random()* 3)]
  cChoice =  compChoice
  console.log(compChoice)
}

function startGame(e) {
  var choice = e.target.id
  uChoice = choice
  console.log(choice)
  computerChoice()
  console.log(compare())
}


// }

function compare(){
  if (uChoice == cChoice){
    return "tie"
  }else if( ....   ) {


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
