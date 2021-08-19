nose_x=0;
nose_y=0;
difference=0;
left_wristX=0;
right_wristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(900,700);
    video.position(200,150)
    canvas=createCanvas(900,700);
    canvas.position(1200,150); 
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is initialized')
}

function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log(nose_x,nose_y)
        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;
        difference=floor(left_wristX-right_wristX)
    }
    
}

function draw()
{
    background("gray");
    document.getElementById("square_side").innerHTML="width and height of square will be="+difference+"px";
    fill('#16e024');
    stroke('blue')
    square(nose_x,nose_y,difference)
}