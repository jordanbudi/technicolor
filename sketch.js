var lpkidsred;
var lpkidsgreen;
var lpkidsblue;
var lpkidsgray;
var television;
var multipleKeys = [];

function preload(){
    lpkidsgray = loadImage("images/lpkids-gray.png");
    lpkidsred = loadImage("images/lpkids-red.png");
    lpkidsgreen = loadImage("images/lpkids-green.png");
    lpkidsblue = loadImage("images/lpkids-blue.png");
    
    television = loadImage("images/old-tv.png");
}

function setup(){
    createCanvas(749,524).parent("sketch-holder");
}


function keyPressed(){
    append(multipleKeys,key);
    console.log(multipleKeys);
}

function keyReleased(){
    
    multipleKeys.forEach(function(item,index,array){
        if(item == key){
            multipleKeys.splice(index,index+1);
        }
    });
}

function draw(){
    if(keyIsPressed){
        multipleKeys.forEach(function(item,index,array){
            if(item == "R"){
                createBlend();
                image(lpkidsred,50,50);
            }
            if(item == "G"){
                createBlend();
                image(lpkidsgreen,50,50);
            }
            if(item == "B"){
                createBlend();
                image(lpkidsblue,50,50);
            }
            if(item == " "){
                createBlend();
                image(lpkidsred,50,50);
                image(lpkidsgreen,50,50);
                image(lpkidsblue,50,50);
            }
        });
        
        blendMode(NORMAL);
        televisionBorder();
    }
    else{
        grayScreen();
    }
}

function createBlend(){
    fill(0);
    rect(50,50,500,374);
    blendMode(LIGHTEST);    
}

function grayScreen(){
    blendMode(NORMAL);
    image(lpkidsgray,50,50);
    televisionBorder();
}

function televisionBorder(){
    image(television,0,0);
}