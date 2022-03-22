x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";

var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function setup()
{
   canvas = createCanvas(900, 600);
}

function start()
{
    document.getElementById("status").innerHTML = "System is listening, please speak";

    recognition.start()
}

recognition.onresult = function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "Speech is recognised as: "+content;

    if(content == "circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);

        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }
    if(content == "rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);

        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rectangle = "set";
    }
}

function draw()
{
    if(draw_circle == "set")
    {
        fill("red");
        radius = Math.floor(Math.random()*50 );
        circle(x, y, radius);

        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }

    if(draw_rectangle == "set")
    {
        fill("blue");
        rect(x, y, 70, 30);

        document.getElementById("status").innerHTML = "rectangle is drawn";
        draw_rectangle = "";
    }
}