function full_sentence() { //Function to concatenate strings.
    var part_1 = "I have";
    var part_2 = "made this";
    var part_3 = "into a complete";
    var part_4 = "Sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //Method formats a number to a specified length.
    var Sentence = "All work and no play make Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML= Section;
}

function string_Method() {  //String method function.
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //Function to Precision method.
    var X=12938.3012987376112;
    document.getElementById("Precision").innerHTML= X.toPrecision(10);
}

function valueOf_Method() { //Function of valueOf method.
    var text="Hello";
    document.getElementById("valueOf").innerHTML=text.valueOf();
}