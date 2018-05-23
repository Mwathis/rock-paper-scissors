class Player {
  constructor(name) {
    this.name=name;
    this.points=0;
  }
  getName() {
    return this.name;
  }

  makeChoice(choice) {
    this.choice=choice;
  }

  getPoints() {
    return this.points;
  }

  addPoints(points) {
    this.points++;
  }

  getChoice() {
    return this.choice;
  }

  getRandomChoice() {
    var choices =["rock","paper","scissors"];

    this.choice=choices[Math.floor((Math.random() *3))];
  }
}
