function Call_Loop() { //Loop function
    var Digit = "";
    var x = 10;
    while (x < 25) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture =[];
    Cat_Picture[0] ="sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById ("Cat").innerHTML = "In this picture, the cat is." +
        Cat_Picture[2] + ".";
}

function constant_function() { //Const keyword
    const Musical_Instrument = {Type:"guitar", brand:"Fender", color:"black" };
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the "+ Musical_Instrument.Type + "was" + Musical_Instrument.price;
}

var X= 82;
document.write(X);
{
    let x = 33; // X is equal 33.
    document.write("<br>" + X);
 }
document.write("<br" + X);

{
let x = 2; // X is equal 2.
}

function myFunction() {  //Return Function.
    return Math.PI;
  }
  document.getElementById("return").innerHTML = myFunction();

let car = { //Objects using let
    make:"Dodge",
    model:"Viper",
    year:"2021",
    color:"Red",
    description: function() {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
  };
  document.getElementById("Car_Object").innerHTML = car.description();

