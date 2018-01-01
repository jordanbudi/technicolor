function setup(){
    createCanvas(600,400);
    // noStroke();
    // textSize(32);
    
}

function draw(){
    jaylin_time = (60-second())*7;
    countdown = 60-second();
    countdownSize = 300;
    textY = 280;
    
    if(countdown == 24 || countdown == 8){
        countdown = 'Kobe';
        countdownSize = 200;
        textY = 225;
    }
    
    background('#72008e');
    
    textSize(countdownSize);
    fill('#ffaa00');
    textAlign(CENTER);
    text(countdown,300,textY);
    
    strokeWeight(5);
    fill(100,100,100,200);
    ellipse(300, 200, jaylin_time, jaylin_time);
}