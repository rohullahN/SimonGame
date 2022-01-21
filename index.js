
var btnColors = ["red", "green", "yellow", "blue"];
var sequence=[];
var userSequence=[];

var gameStarted= false;
var level = 0;

$(document).keypress(function(){
    if(!gameStarted)
    {
        $("body").removeClass("gameOver");
        $(".title").text("Level " + level );
        gameStarted=true;
        generateSequence();
    }

});

function generateSequence()
{
    userSequence=[];
    level++;
    $(".title").text("Level " + level );
    var randColor = Math.floor(Math.random()* btnColors.length);
    sequence.push(randColor);
    console.log(sequence);

 toggleButton(btnColors[randColor]);
 playSound(btnColors[randColor]);
}

function toggleButton(color)
{
    $("."+color).fadeOut(150).fadeIn(150);
    
}

$(".btn").click(function()
{
    var clickedColor= $(this).attr("id");
    var colorIndex;
    switch(clickedColor)
    {
        case "red":
            colorIndex=0;
            
            break;
        case "green":
            colorIndex=1;
            
            break;
        case "yellow":
            colorIndex=2;
        
            break;
        case "blue":
            colorIndex=3;
            
            break;
        default:
            colorIndex=9;
            break;
    }
    userSequence.push(colorIndex);
    console.log(sequence);
    toggleButton(clickedColor);
    playSound(clickedColor);

    
    checkColors();

    
});

function checkColors()
{   
    if(sequence[userSequence.length-1] === userSequence[userSequence.length-1])
    {
        if (sequence.length === userSequence.length)
        {
            setTimeout(function () {
                generateSequence();
              }, 1000); 
        }
    }
    else{
            playSound("wrong");
            $("body").addClass("gameOver");
            $(".title").text("Game Over. Press Any Key to Restart the Game")
            gameStarted=false;
            sequence=[];
            level=0;
    }
}

function playSound(color)
{
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}