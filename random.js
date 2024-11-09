//the array of animals to pick from
const animals = ["duck", "dog", "cat", "lion", "tiger", "giraffe", "eagle", "panda", "koala", "wolf", "sloth", "dolphin", "clownfish", "bear", "me when epic plays", "monsterrrrrrr"];

//getting a random animal epr the user's name input
function generate(){
    const name = document.getElementById("nameInput").value;
    if(!name){ //edge case for no input
        alert("Please enter a name.");
        return;
    }
    //select a random animal
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    //display the output
    const output = document.getElementById("output");
    output.textContent = `${name}, your spirit animal is a ${randomAnimal}! :D`;
    //apply random styles
    restyle();
}

//adding the css styles to the ourput
function restyle() {
    const output = document.getElementById("output");
    //random font size, color, and border style
    const fontSize = Math.floor(Math.random() * 21) + 20 + "px";
    const colors = ["#749da1", "#b4be89", "#4b2e2a;", "#eb9191", "#424c51"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const borders = ["solid", "dotted", "dashed", "double"];
    const randomBorder = borders[Math.floor(Math.random() * borders.length)];
    output.style.fontSize = fontSize;
    output.style.color = randomColor;
    output.style.border = `2px ${randomBorder} ${randomColor}`;
}
