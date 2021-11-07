img="";
statusz="";

function preload(){
img=loadImage("image.jpg");
}

function draw(){


}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}

function tvandac(){
    window.location="tv.html";
}

function fruitbasket(){
    window.location="fruit basket.html";
}

function desk(){
    window.location="desk.html";
}

function bottles(){
    window.location="bottles.html";
}

function bedroom(){
    window.location="bedroom.html";
}