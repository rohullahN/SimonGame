
var btnColors = ["red", "green", "yellow", "blue"];
var sequence=[];
var userSequence=[];

var gameStarted= false;
var level = 0;

$(document).keypress(function(){
    if(!gameStarted)
    {
        $(".title").text("Level " + level );
        gameStarted=true;
        generateSequence();
    }

});

function generateSequence()
{
    level++;
    $(".title").text("Level " + level );
    var randColor = Math.floor(Math.random()* btnColors.length);
    sequence.push(randColor);
    console.log(sequence);

 toggleButton(btnColors[randColor]);
}

function toggleButton(color)
{
    $("."+color).fadeOut(150).fadeIn(150).fadeOut(150).fadeIn(150);
    
}