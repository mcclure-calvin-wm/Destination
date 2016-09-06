//creates context element that connects to html and defines
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//sets canvas dimensions
canvas.style.width = window.innerWidth - 32 + "px";
canvas.style.height = window.innerHeight - 32 + "px";

//updates values and code
function update (){

}

//draws code
function render (){
    context.clearRect(0,0,800,480);

    requestAnimationFrame(render);
}

//runs once, sets up game
function init (){


    setInterval(update, 1000 / 60);
    requestAnimationFrame(render);
}

init();
