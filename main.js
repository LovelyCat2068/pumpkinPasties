noseX = 0;
noseY = 0;
rightwristX = 0;
leftwristX = 0;
difference = 0;
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);

    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', GotPoses);
}

function modelloaded(){
    console.log("DREWRG");
}

function GotPoses(result){
    if(result.length > 0){
    console.log(result);
    noseX = resut[0].pose.nose.x;
    noseY = resut[0].pose.nose.y;
    rightwristX = result[0].pose.rightWrist.x;
    leftwristX = result[0].pose.leftWrist.x;
    difference = floor(leftwristX - rightwristX);
    }
}

function draw(){
    background('#32a852');

    document.getElementById('BBEFB').innerHTML='square size '+difference+'px';
    fill('#32a852');
    stroke('#32a8a4');
    square(noseX, noseY, difference);
}