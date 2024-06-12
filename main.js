noseX = 0;
noseY = 0;
lipstick = "";

function preload() {
    lipstick = loadImage('https://i.postimg.cc/N0VSspRX/red-lips-clipart-design-illustration-free-png.webp');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lipstick, noseX, noseY, 45, 25);
}

function onClick(){
    save('myLipstickFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet is Working!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 25;
        noseY = results[0].pose.nose.y + 15;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}