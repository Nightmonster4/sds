sahara = "";
rave = "";
scoreleftwrist = 0;
songstatus = "";

function preload(){
    sahara = loadSound("sahara.mp3");
    rave = loadSound("rave-official-audio.mp3");
}

function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 700, 500);

    fill("red");
    stroke("#800000");
    song_variable.isPlaying(sahara);
    songstatus = document.getElementById("status");

    if(scoreleftwrist > 0.2){
        circle(left_wristX, left_wristY, 20);
        song_variable.stop(sahara);
        if(song_variable == false){
            song_variable.isPlaying(sahara);
            document.getElementById("status").innerHTML = "Playing Sahara"
        }
    }
}

function gotposes(results){
    if(results.length > 0){
        console.log(results)
        scoreleftwrist = results[0].pose.keypoints[9].score;
}
}

