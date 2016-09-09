// creates context element that connects to html and defines
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Implicitly declaring variables
var rambo;

// sets canvas dimensions
canvas.style.width = window.innerWidth - 32 + "px";
canvas.style.height = window.innerHeight - 32 + "px";

//logs all the key presses
var keys = [];

// Adds event listener for key down and up
window.addEventListener('keydown', function(e) {
    if(keys[e.keyCode] == null){
        keys[e.keyCode] = true;
    }
});
window.addEventListener('keyup', function(e) {
    keys[e.keyCode] = null;
});



// updates values and code
function update (){
    rambo.update();
}

// draws code
function render (){
    //clears the canvas
    context.clearRect(0,0,800,480);
    rambo.render();

    requestAnimationFrame(render);
}

// runs once, sets up game
function init (){

    // creates a variable that holds all the img
    // information for the snowman sprite
    var ramboImg = new Image();
    ramboImg.src = "pics/rambo.png";

    // uses Player constructor to make new snowman
    rambo = new Player(100, canvas.height - 200, 100, 100, ramboImg);

    // creates a refresh rate for the canvas
    setInterval(update, 1000 / 60);
    requestAnimationFrame(render);
}

// creates a reusable constructor function
function Entity (x, y, width, height, sprite){
    // uses parameters to set css values for the Entity
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;

    this.direction = 0;
    this.animation = {
        index: 0,
        frame: 0,
        max: 10
    };
    this.moving = false;

    this.speed = 2;

    // function that creates the img on canvas
    this.render = function () {
        context.drawImage(this.sprite, this.animation.index * 150, this.direction * 117, 150, 117, this.x, this.y, this.width, this.height);
    }
}

// creates a constructor for player type Entities
function Player (x, y, width, height, sprite){
    // creates a new Entity called entity
    var e = new Entity(x, y, width, height, sprite);
    e.waypointX = x;
    e.waypointY = y;
    e.speed = 1;
    // creates an update method
    e.update = function (){

        if(e.moving) {
            if (e.animation.frame >= e.animation.max) {
                e.animation.index++;
                if (e.animation.index > 6) e.animation.index = 0;
                e.animation.frame = 0;
            } else e.animation.frame++;
        } else e.animation.index = 0;

        // adds movement to entity
        //A - When A is pressed the entity loses 5 x value
        var step = 32;
        if(e.moving == false) {
            if (keys[65]) {
                e.waypointX -= step;
                keys[65] = false;
            }
            //D - When D is pressed the entity gains 5 x value
            if (keys[68]) {
                e.waypointX += step;
                keys[68] = false;
            }
            //W - When W is pressed the entity loses 5 y value
            if (keys[87]) {
                e.waypointY -= step;
                keys[87] = false;
            }
            //S - When S is pressed the entity gains 5 y value
            if (keys[83]) {
                e.waypointY += step;
                keys[83] = false;
            }
        }

        e.moving = false;
        if(e.x < e.waypointX) {
            e.x += e.speed;
            e.direction = 3;
            e.moving = true;
        }
        if(e.x > e.waypointX) {
            e.x -= e.speed;
            e.direction = 2;
            e.moving = true;
        }
        if(e.y < e.waypointY) {
            e.y += e.speed;
            e.direction = 0;
            e.moving = true;
        }
        if(e.y > e.waypointY) {
            e.y -= e.speed;
            e.direction = 1;
            e.moving = true;
        }
    };

    return e;
}

// runs the function that starts
// the rest of the processes
init();
