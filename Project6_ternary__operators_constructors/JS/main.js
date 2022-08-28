function Ride_Fuction() {
    var Height, Can_ride;
    Height= document.getElementById ("Height").Value;
    Can_ride=(Height<52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride +"to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and black");
var Erick= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a" + Erick.Vehicle_Color + "-colored" + Erick.Vehicle_Model + "manufactured in" + Erick.Vehicle_Year;
}

function Keyword(Word1,Word2) { //Example 2 of constructor functions
    this.Keyword_Word1=Word1;
    this.Keyword_Word2=Word2;
}
var one= new Keyword("Hello world!");
var two= new Keyword("Hello");
function new_Keyword() {
    document.getElementById("New_and_This").innerHTML="The phrase I want to say is " + one.Keyword_Word1;
}

function count_Function() {
    document.getElementById("Counting").innerHTML= Count();
    function Count() {
        var Starting_point= 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point
    }
}