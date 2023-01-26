

var canvasElem = document.getElementById("angrybird");

var world = boxbox.createWorld(canvasElem);

world.onRender(function(ctx) {
var c=this.camera();
this.camera({x:0,y:0})
});

var player = world.createEntity({
  name: "player",
  shape: "circle",
  radius: 1,
  image: "OIP-removebg-preview.png",
  imageStretchToFit:true,
  x:5,
  y:29,
  density:2,
  onKeyDown: function(e) {
    if (e.keyCode === 39) 
    {
        this.applyImpulse(200, 60);
    }
    else  if (e.keyCode === 37) {
        this.applyImpulse(-200, 120);
    }
    else  if (e.keyCode === 40) {
        this.applyImpulse(-200, 360);
    }
    else  if (e.keyCode === 38) {
        this.applyImpulse(-200, 180);
    }
  }
});

 world.createEntity({
  name: "ground",
  shape: "square",
  type:"static",
  color:"rgb(0,100,0)",
  width:document.documentElement.clientWidth*1,
  height: 0.5,
  y:32,
  
});

world.createEntity({
  name: "wallRight",
  shape: "square",
  type:"static",
  borderWidth:(0),
  color:"rgba(0,0,0,0)",
  width:0.5,
  height: 1040,
  x:65,  
  y:19,
});

world.createEntity({
  name: "wallLeft",
  borderWidth:(0),
  shape: "square",
  type:"static",
  color:"rgba(0,0,0,0)",
  width:0.5,
  height: 1040,
  x:-1,  
  y:19,
});


world.createEntity({
  name: "roof",
  shape: "square",
  borderWidth:(0),
  type:"static",
  color:"rgb(0,100,0)",
  width:1040,
  height: 0.5,
  x:0,
  y:-1,  
});

var block = {
  name: "block",
  shape: "square",
  color: "brown",
  width: .5,
  height: 4,
  y:31,
  onImpact: function(entity, force) {
    if(force >300)
    {
      this.color("black");
      this.destroy();
    }


  }
};

world.createEntity(block, {
  x: 40,
  width:5,
  height:5,
});

world.createEntity(block, {
  x: 40,
  y:29,
  width:2,
  height:5,
});


world.createEntity(block, {
  x: 55,
  width:5,
  height:5,
});

world.createEntity(block, {
  x: 55,
  y:29,
  width:2,
  height:5,
});


world.createEntity(block, {
  x: 45
});

world.createEntity(block, {
  x: 50
});


world.createEntity(block, {
  x: 47.5,
  y: 25,
  width: 20,
  height: .5
});



var countEnemy=3;

var enemy ={
  name: "enemy",
  shape: "circle",
  color: "green",
  image: "cochon-removebg-preview.png",
  imageStretchToFit:true,
  radius:1,
  y:30,
  onImpact: function(entity, force) {
    if(force >30)
    {
      this.color("black");
      this.destroy();
      countEnemy=countEnemy-1;
      if(countEnemy==0)
      {
        setTimeout(win,2000)
      }
    }

    else if (entity.name() === "player") {
      this.color("black");
      this.destroy();
      countEnemy=countEnemy-1;
      if(countEnemy==0)
      {
        setTimeout(win,2000)
      }
   
    }
  }
}

world.createEntity(enemy, {
  x:47.5,
});


world.createEntity(enemy, {
  x: 42,
  y:20,
  
});

world.createEntity(enemy, {
  x: 53,
 y:20,
});


function win()
{
  
      alert("Bravo vous avez réussi, passez au niveau suivant en appuyant sur ok.");
      window.location.href="./lvl2.html"
    
}
