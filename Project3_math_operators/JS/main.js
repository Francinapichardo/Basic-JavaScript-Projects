function subtraction_Function() { //Function that performs substraction
    var Subtraction= 5 - 2;
    document.getElementById("Math").innerHTML= "5 - 2 =" + Subtraction;
    
}

function multiplication() { //Function that peforms multipication
    var simple_Math= 6 * 8;
    document.getElementById("Math").innerHTML="6 x 8 =" + simple_Math;

}
function more_Math() { //Function that performs multiple math operations at once
    var simple_Math = (1 +2)*10/2-5;
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" +simple_Math;
}

function modulus_operator() { //Function that gives the remainder of a division
    var simple_Math= 25 % 6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of:" + simple_Math;
}

function negation_Operator() { //Function that returns the opposite (or negative) of something
    var x = 5;
    var x = 10;
    document.getElementById("Math").innerHTML= -x
}

var X =5; //Gives an increment of one to the number given
X++;
document.write(X);

var X= 5.25; //Decreases the number by one
X--;
document.write(X);

window.alert(Math.random() * 100); //Gives a random number between the numbers given
