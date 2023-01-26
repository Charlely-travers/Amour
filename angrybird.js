var canvasElem = document.getElementById("angrybird");
var world = boxbox.createWorld(canvasElem);

var player = world.createEntity({
  name: "player",
  shape: "circle",
  radius: 1,
  image: "OIP-removebg-preview.png",
  imageStretchToFit:true,
  x:5,
  density:2,
  onKeyDown: function(e) {
    this.applyImpulse(100, 60);
  }
});

 world.createEntity({
  name: "ground",
  shape: "square",
  type:"static",
  color:"rgb(0,100,0)",
  width:1040,
  height: 0.5,
  y:19,
  
});

world.createEntity({
  name: "wallRight",
  shape: "square",
  type:"static",
  color:"rgb(0,100,0)",
  width:0.5,
  height: 1040,
  x:34,  
  y:19,
});

world.createEntity({
  name: "wallLeft",
  shape: "square",
  type:"static",
  color:"rgb(0,100,0)",
  width:0.5,
  height: 1040,
  x:0,  
  y:19,
});


world.createEntity({
  name: "roof",
  shape: "square",
  type:"static",
  color:"rgb(0,100,0)",
  width:1040,
  height: 0.5,
  x:0,
  y:-5,  
});

var block = {
  name: "block",
  shape: "square",
  color: "brown",
  width: .5,
  height: 4,
  y:18,
  onImpact: function(entity, force) {
    if (entity.name() === "player") {
      this.color("black");
      this.destroy();
    }
  }
};

world.createEntity(block, {
  x: 20,
  width:5,
  height:5,
});

world.createEntity(block, {
  x: 20,
  y:16,
  width:2,
  height:5,
});


world.createEntity(block, {
  x: 31,
  width:5,
  height:5,
});

world.createEntity(block, {
  x: 31,
  y:16,
  width:2,
  height:5,
});


world.createEntity(block, {
  x: 25
});

world.createEntity(block, {
  x: 27
});


world.createEntity(block, {
  x: 26,
  y: 16,
  width: 4,
  height: .5
});

var roof ={
  name: "roof",
  shape: "polygon",
  color: "brown",
  onImpact: function(entity, force) {
    if (entity.name() === "player") {
      this.color("black");
      this.destroy();
    }
  }
}

world.createEntity(roof, {
  y:14,
  x:25,
});

var countEnemy=3;

var enemy ={
  name: "enemy",
  shape: "circle",
  color: "green",
  image: "cochon-removebg-preview.png",
  imageStretchToFit:true,
  radius:1,
  y:19,
  onImpact: function(entity, force) {
    if(force >20)
    {
      this.color("black");
      this.destroy();
      countEnemy=countEnemy-1;
        if(countEnemy==0)
        {
          window.location.reload();
          alert("GAGNERRRRRRRRRRRRRRRRRRRRRR");
        }
    }

    else if (entity.name() === "player") {
      this.color("black");
      this.destroy();
      countEnemy=countEnemy-1;
        if(countEnemy==0)
        {
          window.location.reload();
          alert("GAGNERRRRRRRRRRRRRRRRRRRRRR");
        }
    }
  }
}

world.createEntity(enemy, {
  x:26,
});


world.createEntity(enemy, {
  x: 20,
  y:14,
  
});

world.createEntity(enemy, {
  x: 31,
 y:14,
});


