// character position property
let char = {};
char = document.getElementById("character").getBoundingClientRect();
plat1 = document.querySelector(".platform1").getBoundingClientRect();
plat2 = document.querySelector(".platform2").getBoundingClientRect();
lava = document.querySelector(".lava").getBoundingClientRect();

// obstacle position property
// let obst = {};
// obst = document.querySelector(".obstacle").getBoundingClientRect();


// character properties
let charProp = {
    elem: document.getElementById("character"),
    jump : false,
    x: 0,
    y: 200
};

let keys = {
    right: false,
    left: false,
    up: false
};

let friction = 0.7;
let gravity = 0.96;

function keydown(e){
    if(e.code == "ArrowRight"){
        keys.right = true;
    }
    if(e.code == "ArrowLeft"){
        keys.left = true;
    }
    if(e.code == "ArrowUp"){
        charProp.jump = true;
    }
}

function keyup(e){
    if(e.code == "ArrowRight"){
        keys.right = false;
    }
    if(e.code == "ArrowLeft"){
        keys.left = false;
    }
    if(e.code == "ArrowUp") {
        charProp.jump = false;
    }
}

function loop(){
    char = document.getElementById("character").getBoundingClientRect();
    lava = document.querySelector(".lava").getBoundingClientRect();
    plat1 = document.querySelector(".platform1").getBoundingClientRect();

    if(char.bottom > lava.y){
        alert("You Lose!");
    }
    if(charProp.jump == false && (char.bottom - gravity) <= plat1.y){
        charProp.y -= gravity;
    } else if(charProp.jump == false && (char.bottom - gravity) >= plat1.y && char.left < plat1.right){
        charProp.y = platform.y;
    } else {
        charProp.y += gravity;
    }
    if(keys.right){
        charProp.x += 3;
    }
    if(keys.left){
        charProp.x -= 3;
        
    }

    charProp.elem.style.bottom = `${charProp.y}px`
    charProp.elem.style.left = `${charProp.x}px`;
}

document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
setInterval(loop,22);