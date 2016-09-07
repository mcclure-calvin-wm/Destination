// creates context element that connects to html and defines
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Implicitly declaring variables
var snowman;

// sets canvas dimensions
// //canvas.style.width = window.innerWidth - 32 + "px";
// //canvas.style.height = window.innerHeight - 32 + "px";

// updates values and code
function update (){

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
function Player (x, y, width, height, sprite){
    // uses parameters to set css values for the Player
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

// runs the function that starts
// the rest of the processes
init();
