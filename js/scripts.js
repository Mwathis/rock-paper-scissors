$(document).ready(function(){
  var human=new Player("human");
  var computer=new Player("computer");
  var game =new Game();

  function refreshPoints() {
    $('span#human-points').text(human.getPoints());
    $('span#computer-points').text(computer.getPoints());
  }
  $('form').submit(function(event){
    event.preventDefault();

    // Get the choice that the user picked
    var choice=$("select#choice").val();

    // Assign the choice to the human object
    human.makeChoice(choice);

    // Generate a random choice for the computer
    computer.getRandomChoice();

    var winner=game.getWinner(human,computer);
    console.log(typeof winner);

    if(typeof winner === "object"){
      if (winner.getName() === "human") {
        $("h1#reaction").attr("class","em em-muscle");
      } else if (winner.getName() === "computer") {
        $("h1#reaction").attr("class","em em-hankey");
      }
    } else {
      $("h1#reaction").attr("class","em em-necktie");
    }

    refreshPoints();
  });
});
