document.write(typeof "Word"); //Type of variable.

document.write("10" + 5);

function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
}

function not_Number() {
document.getElementById("Test").innerHTML=isNaN('This is a string!'); //NaN=Short for Not a Number.
}

function Number() {
document.getElementById("Test").innerHTML=isNaN('007');
}

document.write(2E310); //Positive Infinity.

document.write(-3E310); //Negative number Infinity.

console.log(2+2)

console.log(10>30)

document.write(2+2 == 4); //Comparison using the double equal symbol.

document.write(10 == 10);

x=10; //One equal symbol assigns a value.
y=10;
document.write(x===y); //Comparison using the triple equal symbol.

a=2;
b=3;
document.write(a===b);

x=24;
A="24";
document.write(x===A);

A="Magnus";
B=3;
document.write(A===B);

document.write(5<2 && 10>4); //From here on are examples of the differents logic operators displayind either true or false outputs.

document.write(5>10 && 10>4);

document.write(5>10 || 10>4);

document.write(4<10 || 10<20);

function not_Function() {
    document.getElementById("Not").innerHTML= !(20<10);
}

function not_Function2() {
    document.getElementById("Not").innerHTML= !(5<10);
}