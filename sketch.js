var database
var player
var game
var form
var gameState = 0
var playerCount

function setup() {
  createCanvas(600,600)
  database = firebase.database()
  console.log(database)

  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  background("cyan")
  
}
