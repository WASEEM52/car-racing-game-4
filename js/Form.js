class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton("reset");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,displayHeight/100);

    this.input.position(displayWidth/2-50,displayHeight/2-50);
    this.button.position(displayWidth/2+40,displayHeight/2);
    this.reset.position(displayWidth-100,20)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2,displayHeight/2);
    });
this.reset.mousePressed(()=>{
player.updateCount(0)
game.update(0)

})
}
displayrank(){
background(rank)
var message = createElement('h3')
var message2 = createElement('h4')

message.html("congragulations")
message.position(displayWidth/5,displayHeight/100)

message2.html("rank no:"+player.rank)
message2.position(displayWidth/7,displayHeight/50)

}
}

