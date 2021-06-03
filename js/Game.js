class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gamestate');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gamestate: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playercount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
car1 = createSprite(100,200);
car1.addImage("car1",car1image)
car2 = createSprite(300,200);
car2.addImage("car2",car2image)
car3 = createSprite(500,200);
car3.addImage("car3",car3image)
car4 = createSprite(700,200);
car4.addImage("car4",car4image)
car = [car1,car2,car3,car4]
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start",displayWidth/2,displayHeight/2);
    Player.getPlayerInfo();
    Player.getrank();

    if(allPlayers !== undefined){
background(groundimage)
image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)


      //var display_position = 130;
      var index=0;
      var x=175;
      var y;
      for(var plr in allPlayers){
        index=index+1
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
      car [index-1].x=x;
      car [index-1].y=y;
        if (index===player.index){
        stroke(10)
        fill("red");
        ellipse(x,y,60,60);
        camera.position.x=displayWidth/2
        camera.position.y=car [index-1].y
        car[index-1].shapeColor="red";
        }
         
        else
          fill("black");

        //display_position+=20;
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }
drawSprites();
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>3860){
      gameState=2
      player.rank+=1
      Player.updaterank(player.rank)
    }



  }
end()
{form.displayrank();


}
}
