class Game {
  getWinner(human,computer) {
    var winner;
    if ((human.getChoice() === "rock" &&
    computer.getChoice() === "paper")
    ||(human.getChoice() === "paper" &&
    computer.getChoice() === "scissors")
    ||(human.getChoice() === "scissors" &&
    computer.getChoice() === "rock")
  ) {
    computer.addPoints();
    winner=computer;
  } else if ((computer.getChoice() === "rock" &&
    human.getChoice() === "paper")
    ||(computer.getChoice() === "paper" &&
    human.getChoice() === "scissors")
    ||(computer.getChoice() === "scissors" &&
    human.getChoice() === "rock")
  ) {
    human.addPoints();
    winner=human;
  } else {
    winner = "draw"
  }
    return winner;
  }
}
