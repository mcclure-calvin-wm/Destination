// creates context element that connects to html and defines
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Implicitly declaring variables
var snowman;

// sets canvas dimensions
canvas.style.width = window.innerWidth - 32 + "px";
canvas.style.height = window.innerHeight - 32 + "px";

//logs all the key presses
var keys = [];

// Adds event listener for key down and up
window.addEventListener('keydown', function(e) {
    keys[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    keys[e.keyCode] = false;
});

// Adds event listener for key presses
// // window.addEventListener('keypress', function(e) {
// //     keys[e.keyCode] = true;
// // });



// updates values and code
function update (){
    snowman.update();
}

// draws code
function render (){
    //clears the canvas
    context.clearRect(0,0,800,480);
    snowman.render();

    requestAnimationFrame(render);
}

// runs once, sets up game
function init (){

    // creates a variable that holds all the img
    // information for the snowman sprite
    var snowmanImg = new Image();
    snowmanImg.src = "pics/snowman.png";

    // uses Player constructor to make new snowman
    snowman = new Player(100, canvas.height - 150, 200, 200, snowmanImg);

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

    // function that creates the img on canvas
    this.render = function () {
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}

// creates a constructor for player type Entities
function Player (x, y, width, height, sprite){
    // creates a new Entity called entity
    var entity = new Entity(x, y, width, height, sprite);

    // creates an update method
    entity.update = function (){

        // adds movement to entity
        //A - When A is pressed the entity loses 5 x value
        if(keys[65]) entity.x-= 5;
        //D - When D is pressed the entity gains 5 x value
        if(keys[68]) entity.x+= 5;
    };

    return entity;
}

// runs the function that starts
// the rest of the processes
init();
