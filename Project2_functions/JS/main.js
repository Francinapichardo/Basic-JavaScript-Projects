function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById ("Button_Text").innerHTML = str;
}

function changeColor(newColor) {
    const elem = document.getElementById('para');
    elem.style.color = newColor;
  }

function myFunction() {
    var sentence = "I am learning";
    sentence +=" a lot form this book!";
    document.getElementById("Concatenate").innerHTML= sentence;
}
