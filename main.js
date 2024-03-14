song="";
function preload(){

    song=loadsound("music.mp3");
}

function setup() {
canvas= createCanvas(600, 500);
canvas.center();

video= createCapture(VIDEO);
video.hide();
}
rightWristX = 0;
rightWristX = 0;

leftWristX = 0;
leftWristX = 0;

scorerightWristY = 0;
scoreleftWristX = 0;

function draw(){
 image(video,0,0,500, 600);
}
function play(){
song.play();

}
function gotposes(results){
    if (results.lenght >0){
        console.log(results);
        leftWristY= results[0].pose.leftWrist.y;
        leftWristX =results[0].pose.leftWrist.x;
        console.log("leftWristX=" + leftWristX+"leftWristY "+leftWristY);
        
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX=" + rightWristX+"rightWristY "+rightWristY);
    }