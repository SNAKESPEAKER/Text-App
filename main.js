noseX=0;
noseY=0;
difference=0;
leftW=0;
rightW=0;




function setup() {
  canvas= createCanvas(600, 500);
  canvas.position(650, 100);
  video= createCapture(VIDEO);
  video.size(600,500);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNet Model has been initialised !!!");
}


function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    leftW= results[0].pose.leftWrist.x;
    rightW= results[0].pose.rightWrist.x;
    difference= floor(leftW-rightW);

    console.log("Nose X is "+noseX+", Y is "+noseY);
    console.log("Left Wrist X is "+leftW+", Right Wrist X is "+rightW+" and the difference is "+difference);
  }
} 

function draw() {
 document.getElementById("w-h-square").innerHTML= "Width and Height of the text will be: "+difference+"px";
 background("yellow");
 fill("darkgreen");
 textSize(difference);
 text("text", noseX, noseY);

}

