canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
canvas.style.width = window.innerWidth - 32 + "px";
canvas.style.height = window.innerHeight - 32 + "px";

function update (){

}

function render (){
    context.clearRect(0,0,800,480);

    requestAnimationFrame(render);
}

function init (){


    setInterval(update, 1000 / 60);
    requestAnimationFrame(render);
}

init();
