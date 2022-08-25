function my_Dictionary() { //Creates a "dictionary" list
    var Animal= {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //Deletes an item from my dictionary
    document.getElementById("Dictionary").innerHTML=Animal.Sound; //Displays the selected key from the dictionary
}  