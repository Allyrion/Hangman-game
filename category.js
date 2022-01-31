const word = require("./Word.js");


const animals = [];
animals.push(new word (["c","o","b","r","a"]));
animals.push(new word (["j","a","g","u","a","r"]));
animals.push(new word (["p","l","a","t","y","p","u","s"]));
animals.push(new word (["o","s","t","r","i","c","h"]));
animals.push(new word (["k","o","m","o","d","o"," ","d","r","a","g","o","n"]));
animals.push(new word (["p","e","g","u","i","n"]));
animals.push(new word (["a","r","m","a","d","i","l","l","o"]));
animals.push(new word (["c","a","p","y","b","a","r","a"]));
animals.push(new word (["o","c","e","l","o","t"]));
animals.push(new word (["g","i","r","a","f","f","e"]));
animals.push(new word (["c","r","o","c","o","d","i","l","e"]));
animals.push(new word (["h","i","p","p","o","p","o","t","a","m","u","s"]));
animals.push(new word (["p","o","l","a","r"," ","b","e","a","r"]));
animals.push(new word (["d","o","l","p","h","i","n"]));
animals.push(new word (["e","l","e","p","h","a","n","t"]));

const countries = [];
countries.push(new word (["t","r","i","n","i","d","a","d"," ", "a","n","d"," ","t","o","b","a","g","o"]));
countries.push(new word (["s","i","n","g","a","p","o","r","e"]));
countries.push(new word (["b","r","a","z","i","l"]));
countries.push(new word (["s","w","i","t","z","e","r","l","a","n","d"]));
countries.push(new word (["t","h","a","i","l","a","n","d"]));
countries.push(new word (["b","a","r","b","a","d","o","s"]));
countries.push(new word (["a","r","g","e","n","t","i","n","a"]));
countries.push(new word (["a","u","s","t","r","a","l","i","a"]));
countries.push(new word (["r","o","m","a","n","i","a"]));
countries.push(new word (["v","i","e","t","n","a","m"]));
countries.push(new word (["p","h","i","l","i","p","p","e","s"]));
countries.push(new word (["m","e","x","i","c","o"]));
countries.push(new word (["v","e","n","e","z","u","e","l","a"]));
countries.push(new word (["j","a","m","a","i","c","a"]));
countries.push(new word (["n","i","c","a","r","a","g","u","a"]));

const games = [];
games.push(new word (["s","e","k","i","r","o"]));
games.push(new word (["f","i","n","a","l"," ","f","a","n","t","a","s","y"]));
games.push(new word (["l","e","a","g","u","e"," ","o","f"," ","l","e","g","e","n","d","s"]));
games.push(new word (["c","h","r","o","n","o"," ","c","r","o","s","s"]));
games.push(new word (["m","e","t","a","l"," ","g","e","a","r"," ","s","o","l","i","d"]));
games.push(new word (["n","i","e","r"," ","a","u","t","o","m","a","t","a"]));
games.push(new word (["s","h","a","d","o","w"," ","o","f"," ","c","o","l","o","s","s","u","s"]));
games.push(new word (["b","i","o","s","h","o","c","k"," ","i","n","f","i","n","i","t","e"]));
games.push(new word (["r","e","d"," ","d","e","a","d"," ","r","e","d","e","m","p","t","i","o","n"]));
games.push(new word (["s","m","i","t","e"]));
games.push(new word (["h","o","r","i","z","o","n"," ","z","e","r","o"," ","d","a","w","n"]));
games.push(new word (["k","i","n","g","d","o","m"," ","h","e","a","r","t","s"]));
games.push(new word (["w","o","r","l","d"," ","o","f"," ","w","a","r","c","r","a","f","t"]));
games.push(new word (["o","v","e","r","w","a","t","c","h"]));
games.push(new word (["y","a","k","u","z","a"]));

category = [];
category.push(animals);
category.push(countries);
category.push(games);

module.exports = category;



/* TESTING logs - 
console.log(animals);


animals[4].createDashes();
animals[4].displayDashes();

animals[4].searchWord("o");
animals[4].displayDashes(); */