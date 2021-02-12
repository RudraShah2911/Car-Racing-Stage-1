class Form {
    constructor(){

    }

    display(){
        var input = createInput("")
        input.position(150,250)
        var button = createButton("Play")
        button.position(300,250)
        var title = createElement("h2")
        title.position(200,10)
        title.html("Car Racer!")
        var greeting = createElement("h3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount = playerCount + 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hello, " + name)
            greeting.position(200,200)
        })
    }
    

}