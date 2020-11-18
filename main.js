canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var rover_width=100;
rover_height=90;
background_image="racing.jpg";
rover_image="car1.png";
rover_image="car1.png";
var rover_x=10;
var rover_y=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uplaodbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;

}
function uplaodbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
    
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38'){
up();
console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");

    }
    if(keypressed=='37'){
       Left();
       console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
