function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById ("Button_Text").innerHTML = str;
}

function My_First_Function () {                   //Defining a function and naming it
    var str= "This is the button text!";          //Defining a variable and giving it
                                                  //a string value
    document.getElementById("Button_Text").innerHTML=str;   //putting the value
                                                  // of the variable into the HTML elementFromPoint
                                                 //with the "Button_text"id
}

var A= "This is a string";
document.write(A);

document.write("Lisa told Bart,\"Knock it Off, Bart! or i'll tell dad!\"<br>\"Eat my shorts!\"Bart responded." );

document.write("Be who you are and say what you feel,"
+"because those who mind don\'t matter and those who matter don\'t mind.\""
+ "-Dr.seuss");

var B = "Concatenated" + "String"
document.write(B)