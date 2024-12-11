// character position property
let char = {};
char = document.getElementById("character").getBoundingClientRect();

// obstacle position property
let obst = {};
obst = document.querySelector(".obstacle").getBoundingClientRect();

// container position property
let container = {};
container = document.getElementById("container").getBoundingClientRect();

let score = 0;

// character properties
let charProp = {};
charProp.jumpHeight = 0;
charProp.elem = document.getElementById("character");
charProp.maxJump = 80;
charProp.jumping = false;
charProp.hangTime = 0;
charProp.maxHang = 1;

setInterval(() => {
    char = document.getElementById("character").getBoundingClientRect();
    obst = document.querySelector(".obstacle").getBoundingClientRect();
    if(char.right > obst.x && char.bottom > obst.y){
        alert("You Lose!");
        document.querySelector(".obstacle").style.animation = "none";
    }
    else if(obst.x < container.x){
        score += 1;
        document.getElementById("score").innerHTML = `Score: ${score}`;
    }
}, 100)

document.addEventListener("keydown", e=> {
    if(e.code == "Space"){
        jumping();
    }
})

function jumping(){
    charProp.jumping = true;
    let jump = setInterval(() => {
        // going up
        if(charProp.jumpHeight < charProp.maxJump && charProp.jumping == true){
            charProp.jumpHeight += 10;
        }
        // top of jump
        else if(charProp.jumpHeight >= charProp.maxJump && charProp.jumping == true){
            charProp.jumping = false;
        }
        // hang time
        else if(charProp.jumping == false && charProp.hangTime < charProp.maxHang){
            charProp.jumpHeight = charProp.maxJump;
            charProp.hangTime += 1;
        }
        // falling
        else if(charProp.jumpHeight > 0 && charProp.jumping == false && charProp.hangTime >= charProp.maxHang){
            charProp.jumpHeight -= 10;
        }
        // at bottom?
        else{
            charProp.falling = false;
            clearInterval(jump);
        }
        charProp.elem.style.bottom = `${charProp.jumpHeight}px`;
    }, 100)
}